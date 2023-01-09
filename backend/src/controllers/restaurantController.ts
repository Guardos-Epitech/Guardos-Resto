import { restaurantSchema } from '../models/restaurantInterfaces';
import mongoose from 'mongoose';

export async function getRestaurantByName(restaurantName: string) {
    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    return Restaurant.findOne({name: restaurantName});
}
