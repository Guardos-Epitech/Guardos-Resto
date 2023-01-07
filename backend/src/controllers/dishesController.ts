import mongoose from 'mongoose';
import { restaurantSchema} from '../models/restaurantInterfaces';
import {IdishesCommunication} from '../models/communicationInterfaces';

export async function getDishesByRestaurantID(restaurantId: number) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    return Restaurant.find({_id: restaurantId}, 'dishes');
}

export async function getDishesByRestaurantName(restaurantName: string) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    return Restaurant.find({name: restaurantName}, 'dishes');
}

export async function getAllDishes() {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    const restaurants = await Restaurant.find({}, 'dishes');
    const dishes = restaurants.map((restaurant) => restaurant.dishes)
        .flat();
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

async function createDish(restaurantName: string, dish: IdishesCommunication) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    return Restaurant.findOneAndUpdate(
        {name: restaurantName},
        {$push: {dishes: dish}},
        {new: true}
    );
}
export async function createNewDish(
    restaurantName: string, dishCom: IdishesCommunication) {
    const dish : IdishesCommunication = {
        name: dishCom.name,
        description: dishCom.description ? dishCom.description : '',
        price: dishCom.price ? dishCom.price : -1,
        products: dishCom.products ? dishCom.products : [''],
        pictures: dishCom.pictures ? dishCom.pictures : [''],
        allergens: dishCom.allergens ? dishCom.allergens : '',
        category: dishCom.category ? dishCom.category : {
            menuGroup: '',
            foodGroup: '',
            extraGroup: '',
        },
    };
    await createDish(restaurantName, dish);
    return dish;
}

export async function deleteNewDishByName(
    restaurantName: string, dishName: string) {
    await deleteDish(restaurantName, dishName);
    return dishName + ' deleted';
}
