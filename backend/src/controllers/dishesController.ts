import mongoose from 'mongoose';
import { restaurantSchema} from '../models/restaurantInterfaces';
import {IdishesCommunication} from '../models/communicationInterfaces';
import {IDishBE} from '../models/dishInterfaces';

export async function getDishesByRestaurantID(restaurantId: number) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    return Restaurant.find({_id: restaurantId}, 'dishes');
}

export async function getDishesByRestaurantName(restaurantName: string) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    return Restaurant.find({name: restaurantName}, 'dishes');
}

async function getDishByName(restaurantName: string, dishName: string) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    const restaurant = await Restaurant.findOne({ name: restaurantName });
    if (!restaurant) {
        return null;
    }
    return restaurant.dishes.find((dish) => dish.name === dishName);
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
    restaurantName: string, dish: IdishesCommunication) {
    const oldDish = await getDishByName(restaurantName, dish.name);
    const newDish: IDishBE = {
        //if the new dish has a property, use it, else use the old one
        name: dish.name ? dish.name : oldDish.name,
        id: 6,
        description: dish.description ? dish.description : oldDish.description,
        price: dish.price ? dish.price : oldDish.price,
        products: dish.products ? dish.products : oldDish.products as [string],
        pictures: dish.pictures ? dish.pictures : oldDish.pictures as [string],
        allergens: dish.allergens ? dish.allergens : oldDish.allergens,
        category: dish.category ? dish.category : oldDish.category as {
            menuGroup: string;
            foodGroup: string;
            extraGroup: string;
        }
    };
    await updateDish(restaurantName, newDish);
    return newDish;
}
