import {IOpeningHours, IProducts, IRestaurantBackEnd,
    IRestaurantFrontEnd, restaurantSchema}
    from '../models/restaurantInterfaces';
import mongoose from 'mongoose';
import { ICategories } from '../models/categoryInterfaces';
import { IDishBE, IDishFE } from '../models/dishInterfaces';
import { IMealType } from '../models/mealTypeInterfaces';
import { ILocation } from '../models/locationInterfaces';
import { IRestaurantCommunication } from '../models/communicationInterfaces';

function createBackEndObj(restaurant: {
    id: number;
    name: string;
    description: string;
    rating: number;
    ratingCount: number;
    website: string;
    openingHours: [IOpeningHours];
    pictures: [string];
    phoneNumber: string;
    mealType: [IMealType];
    dishes: [IDishBE];
    location: ILocation;
    products: [IProducts];
    extras: [IDishBE] }) {

    const restaurantBE: IRestaurantBackEnd = {
        name: restaurant.name,
        description: restaurant.description,
        id: restaurant.id,
        website: restaurant.website,
        rating: restaurant.rating,
        ratingCount: restaurant.ratingCount,
        phoneNumber: restaurant.phoneNumber,
        pictures: restaurant.pictures,
        openingHours: [{} as IOpeningHours],
        products: [{} as IProducts],
        dishes: [{} as IDishBE],
        location: {} as ILocation,
        mealType: [{} as IMealType],
        extras: [{} as IDishBE],
    };
    restaurantBE.dishes.pop();
    restaurantBE.mealType.pop();
    restaurantBE.extras.pop();
    restaurantBE.products.pop();
    restaurantBE.openingHours.pop();
    let dishId = 0;
    for (const dish of restaurant.dishes) {
        const dishObj: IDishBE = {
            id: dishId,
            name: dish.name,
            description: dish.description,
            products: dish.products,
            pictures: dish.pictures,
            price: dish.price,
            allergensOld: dish.allergensOld,
            allergens: dish.allergens,
            category: dish.category
        };
        dishId++;
        restaurantBE.dishes.push(dishObj);
    }
    for (const openingHoursElement of restaurant.openingHours) {
        restaurantBE.openingHours.push(openingHoursElement);
    }
    for (const mealTypeElement of restaurant.mealType) {
        restaurantBE.mealType.push(mealTypeElement);
    }
    for (const product of restaurant.products) {
        restaurantBE.products.push(product);
    }
    restaurantBE.location = restaurant.location;
    let extraId = 0;
    for (const extra of restaurant.extras) {
        const extraObj: IDishBE = {
            id: extraId,
            name: extra.name,
            description: extra.description,
            products: extra.products,
            price: extra.price,
            pictures: extra.pictures,
            allergensOld: extra.allergensOld,
            allergens: extra.allergens,
            category: extra.category
        };
        extraId++;
        restaurantBE.extras.push(extraObj);
    }
    return restaurantBE;
}

function createRestaurantObjFe(
    restaurant: IRestaurantBackEnd) {
    const obj: IRestaurantFrontEnd = {
        name: restaurant.name,
        website: restaurant.website,
        description: restaurant.description,
        rating: restaurant.rating,
        pictures: restaurant.pictures,
        openingHours: [{} as IOpeningHours],
        products: [{} as IProducts],
        id: restaurant.id,
        phoneNumber: restaurant.phoneNumber,
        categories: [{} as ICategories],
        location: restaurant.location,
    };
    obj.categories.pop();
    obj.products.pop();
    obj.openingHours.pop();
    for (const product of restaurant.products) {
        obj.products.push(product);
    }
    for (const openingHoursElement of restaurant.openingHours) {
        obj.openingHours.push(openingHoursElement);
    }

    for (const x of restaurant.mealType) {
        const categories: ICategories = {
            name: x.name,
            hitRate: 0,
            dishes: [{} as IDishFE]
        };
        categories.dishes.pop();
        for (const dish of restaurant.dishes) {
            if (dish.category.menuGroup === x.name) {
                const dishObj: IDishFE = {
                    name: dish.name,
                    description: dish.description,
                    price: dish.price,
                    pictures: dish.pictures,
                    allergens: [dish.allergensOld],
                    category: {
                        foodGroup: dish.category.foodGroup,
                        extraGroup: dish.category.extraGroup},
                };
                categories.dishes.push(dishObj);
            }
        }
        obj.categories.push(categories);
    }
    return obj;
}

export async function getRestaurantByName(restaurantName: string) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    const rest = await Restaurant.findOne({name: restaurantName});
    if (!rest)
        return null;

    const restaurantBE = createBackEndObj({
        description: rest.description,
        dishes: rest.dishes as [IDishBE],
        extras: rest.extras as unknown as [IDishBE],
        id: rest.id,
        location: rest.location as ILocation,
        mealType: rest.mealType as [IMealType],
        name: rest.name,
        openingHours: rest.openingHours as [IOpeningHours],
        phoneNumber: rest.phoneNumber,
        pictures: rest.pictures as [string],
        products: rest.products as [IProducts],
        rating: rest.rating,
        ratingCount: rest.ratingCount,
        website: rest.website}
    );
    return createRestaurantObjFe(restaurantBE);
}

export async function getAllRestaurants() {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    const restaurants = await Restaurant.find();
    const answer : [IRestaurantFrontEnd] = [{} as IRestaurantFrontEnd];
    answer.pop();

    for (const restaurant of await restaurants) {
        const restaurantBE = createBackEndObj({
            description: restaurant.description,
            dishes: restaurant.dishes as [IDishBE],
            extras: restaurant.extras as unknown as [IDishBE],
            id: 0,
            location: restaurant.location as ILocation,
            mealType: restaurant.mealType as [IMealType],
            name: restaurant.name,
            openingHours: restaurant.openingHours as [IOpeningHours],
            phoneNumber: restaurant.phoneNumber,
            pictures: restaurant.pictures as [string],
            products: restaurant.products as [IProducts],
            rating: restaurant.rating,
            ratingCount: restaurant.ratingCount,
            website: restaurant.website}
        );
        answer.push(createRestaurantObjFe(restaurantBE));
    }
    return answer;
}

export async function createNewRestaurant(
    obj: IRestaurantCommunication, id: number) {
    const RestaurantSchema = mongoose.model('Restaurants', restaurantSchema);
    const upload = new RestaurantSchema({
        _id: id,
        name: obj.name,
        phoneNumber: obj.phoneNumber ? obj.phoneNumber : '+1000000000',
        website: obj.website ? obj.website : 'www.default.de',
        rating: 0,
        ratingCount: 0,
        description: obj.description ? obj.description: 'default description',
        dishes: obj.dishes ? obj.dishes : [],
        pictures: obj.pictures ? obj.pictures : ['empty.jpg'],
        openingHours: obj.openingHours ? obj.openingHours : [
            {open: '11:00', close: '22:00', day: 0}],
        location: obj.location ? obj.location : {},
        mealType: obj.mealType ? obj.mealType : [],
        products: obj.products ? obj.products : [],
        extras: obj.extras ? obj.extras : [],
    });
    await upload.save();
    console.log('Restaurant ' + obj.name + ' saved ' + ' with id ' + id);
    return upload;
}

export async function deleteRestaurantByName(restaurantName: string) {
    const Restaurant = mongoose.model('Restaurants', restaurantSchema);
    await Restaurant.deleteOne({name: restaurantName});
    return 'deleted ' + restaurantName;
}

async function updateRestaurantByName(
    restaurant : IRestaurantBackEnd, restaurantName: string) {
    const Restaurant = mongoose.model('Restaurants', restaurantSchema);
    return Restaurant.findOneAndUpdate(
        {name: restaurantName},
        restaurant,
        {new: true}
    );
}

export async function changeRestaurant(
    restaurant: IRestaurantCommunication, restaurantName: string) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    const oldRest = await Restaurant
        .findOne({name: restaurantName})as IRestaurantBackEnd;
    const newRest : IRestaurantBackEnd = {
        description: restaurant.description ?
            restaurant.description : oldRest.description,
        dishes: restaurant.dishes ?
            restaurant.dishes : oldRest.dishes,
        extras: restaurant.extras ? restaurant.extras : oldRest.extras,
        id: oldRest.id,
        location: restaurant.location ? restaurant.location : oldRest.location,
        mealType: restaurant.mealType ? restaurant.mealType : oldRest.mealType,
        openingHours: restaurant.openingHours
            ? restaurant.openingHours : oldRest.openingHours,
        phoneNumber: restaurant.phoneNumber
            ? restaurant.phoneNumber : oldRest.phoneNumber,
        pictures: restaurant.pictures ? restaurant.pictures : oldRest.pictures,
        products: restaurant.products ? restaurant.products : oldRest.products,
        rating: oldRest.rating,
        ratingCount: oldRest.ratingCount,
        website: restaurant.website ? restaurant.website : oldRest.website,
        name: restaurant.name ? restaurant.name : oldRest.name,
    };
    await updateRestaurantByName(newRest, restaurantName);
    return newRest;
}

function getProductObj(productName: string) {
    if (productName === 'cheese') {
        return {
            name: productName,
            allergensOld: ['milk'],
            ingredients: ['milk', 'cheddar cheese', 'salt']
        };
    } else if (productName === 'seasoning') {
        return {
            name: productName,
            allergensOld: ['gluten'],
            ingredients: ['wheat', 'herbs', 'salt']
        };
    } else {
        return {
            name: productName,
            allergensOld: [''],
            ingredients: []
        };
    }
}

export async function addRestoProduct(productName: string) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    const restaurants = await Restaurant.find();
    const restaurantsBE : IRestaurantBackEnd[] = [];

    for (const restaurant of await restaurants) {
        restaurantsBE.push(createBackEndObj({
            description: restaurant.description,
            dishes: restaurant.dishes as [IDishBE],
            extras: restaurant.extras as unknown as [IDishBE],
            id: 0,
            location: restaurant.location as ILocation,
            mealType: restaurant.mealType as [IMealType],
            name: restaurant.name,
            openingHours: restaurant.openingHours as [IOpeningHours],
            phoneNumber: restaurant.phoneNumber,
            pictures: restaurant.pictures as [string],
            products: restaurant.products as [IProducts],
            rating: restaurant.rating,
            ratingCount: restaurant.ratingCount,
            website: restaurant.website}
        ));
    }

    restaurantsBE.map(async (restaurant) => {
        restaurant.products.push(getProductObj(productName));
        await updateRestaurantByName(restaurant, restaurant.name);
    });
    return true;
}

export async function getAllRestoProducts(restoName: string) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    const rest = await Restaurant.findOne({name: restoName});
    if (!rest)
        return null;
    return rest.products;
}
