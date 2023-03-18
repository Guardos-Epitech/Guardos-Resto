import mongoose from 'mongoose';
import { restaurantSchema, restaurantSchemaOld }
    from '../models/restaurantInterfaces';
import { IDishesCommunication } from '../models/communicationInterfaces';
import {IDishBE, IDishFE} from '../models/dishInterfaces';
import {ICategoryFE} from '../models/categoryInterfaces';

export async function getDishesByRestaurantID(restaurantId: number) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    return Restaurant.find({_id: restaurantId}, 'dishes');
}

export async function getDishesByRestaurantName(restaurantName: string) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    return Restaurant.find({name: restaurantName}, 'dishes');
}

export async function getDishByName(restaurantName: string, dishName: string) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    const restaurant = await Restaurant.findOne({ name: restaurantName });
    if (!restaurant) {
        return null;
    }
    return restaurant.dishes.find((dish) => dish.name === dishName);
}

export async function updateDishes(): Promise<void> {
    const Restaurant = mongoose.model('Restaurant', restaurantSchemaOld);
    const save = [];
    const restaurants = await Restaurant.find();
    let thiId = -1;
    for (const rest of restaurants) {
        thiId++;
        const updatedDishes = rest.dishes.map((dish) => {
            return {
                id: thiId,
                name: dish.name,
                description: dish.description,
                price: dish.price,
                pictures: dish.pictures,
                allergens: dish.allergens,
                products: dish.products,
                category: {
                    menuGroup: dish.category.menuGroup,
                    foodGroup: dish.category.foodGroup,
                    extraGroup: dish.category.extraGroup,
                }
            };
        });
        //await rest.save();
        for (const dish of updatedDishes) {
            if (dish.category.extraGroup.split(',').length > 1) {
                save.push([(await rest).name, dish,
                    dish.category.extraGroup.split(',')]);
            }
        }
    }

    const dishes = save[1];
    let count = 0;
    console.log('LETS GOOO\n\n\n');
    for (const dish of dishes as IDishesCommunication[]) {
        console.log(save[count]);
        await Restaurant.findOneAndUpdate(
            {name: save[count]},
            {$pull: { dishes: { name: save[count][0] as string}}},
            {new: true}
        );
        count++;
    }
    count = 0;
    console.log('DONE\n\n\n');
    const restDB = mongoose.model('Restaurant', restaurantSchema);
    for (const dish of dishes as IDishesCommunication[]) {
        dish.category.extraGroup = save[count][2] as string[];
        await restDB.findOneAndUpdate(
            {name: save[count]},
            {$push: {dishes: dish}},
            {new: true}
        );
        count++;
    }
}

export async function getAllDishes() {
    const Restaurant = mongoose.model('Restaurant', restaurantSchemaOld);
    const restaurants = await Restaurant.find();
    const dishes: IDishFE[] = [];
    for (const rest of restaurants) {
        for (const dish of rest.dishes) {
            const dishFE: IDishFE = {
                name: dish.name,
                description: dish.description,
                price: dish.price,
                pictures: [''],
                allergens: [''],
                category: {} as ICategoryFE,
            };
            dishFE.pictures.pop();
            dishFE.allergens.pop();

            for (const pict of dish.pictures) {
                dishFE.pictures.push(pict);
            }

            for (const allergen of dish.allergens) {
                dishFE.allergens.push(allergen);
            }
            dishes.push(dishFE);
        }
    }
    return dishes;
}

async function deleteDish(restaurantName: string, dishName: string) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    return Restaurant.findOneAndUpdate(
        {name: restaurantName},
        {$pull: { dishes: { name: dishName}}},
        {new: true}
    );
}

async function createDish(restaurantName: string, dish: IDishesCommunication) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    return Restaurant.findOneAndUpdate(
        {name: restaurantName},
        {$push: {dishes: dish}},
        {new: true}
    );
}
export async function createNewDish(
    restaurantName: string, dishCom: IDishesCommunication) {
    const dish : IDishesCommunication = {
        name: dishCom.name,
        description: dishCom.description ? dishCom.description : '',
        price: dishCom.price ? dishCom.price : -1,
        products: dishCom.products ? dishCom.products : [''],
        pictures: dishCom.pictures ? dishCom.pictures : [''],
        allergens: dishCom.allergens ? dishCom.allergens : [''],
        category: dishCom.category ? dishCom.category : {
            menuGroup: '',
            foodGroup: '',
            extraGroup: [''],
        },
    };
    await createDish(restaurantName, dish);
    return dish;
}

export async function deleteDishByName(
    restaurantName: string, dishName: string) {
    await deleteDish(restaurantName, dishName);
    return dishName + ' deleted';
}

export async function updateDish(
    restaurantName: string, dish: IDishBE) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    return Restaurant.findOneAndUpdate(
        {name: restaurantName, 'dishes.name': dish.name},
        {$set: {'dishes.$': dish}},
        {new: true}
    );
}

export async function changeDishByName(
    restaurantName: string, dish: IDishesCommunication) {
    const oldDish = await getDishByName(restaurantName, dish.name);
    const newDish: IDishBE = {
        //if the new dish has a property, use it, else use the old one
        name: dish.name ? dish.name : oldDish.name,
        id: 6,
        description: dish.description ? dish.description : oldDish.description,
        price: dish.price ? dish.price : oldDish.price,
        products: dish.products ? dish.products : oldDish.products as string[],
        pictures: dish.pictures ? dish.pictures : oldDish.pictures as string[],
        allergens: dish.allergens ? dish.allergens as [string] :
            oldDish.allergens as [string],
        category: dish.category ? dish.category : oldDish.category as {
            menuGroup: string;
            foodGroup: string;
            extraGroup: [string];
        }
    };
    await updateDish(restaurantName, newDish);
    return newDish;
}
