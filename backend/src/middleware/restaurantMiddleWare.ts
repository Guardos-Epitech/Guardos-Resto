import {getRestaurantByName} from '../controllers/restaurantController';

export async function checkIfRestaurantExists(restaurantName: string) {
    const restaurant = await getRestaurantByName(restaurantName);
    return !!restaurant;
}
