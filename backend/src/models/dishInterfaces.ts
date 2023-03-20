import { ICategoryBE, ICategoryFE } from './categoryInterfaces';
import mongoose from 'mongoose';
export interface IDishBE {
    name: string;
    id: number;
    description: string;
    price: number;
    allergens: [string];
    pictures: string[];
    products: string[];
    category: ICategoryBE;
}

export interface IDishFE {
    name: string;
    description: string;
    price: number;
    allergens: [string];
    pictures: string[];
    category: ICategoryFE;
}

export const dishSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    description: String,
    products: [String],
    pictures: [String],
    price: Number,
    allergensOld: String,
    category: {
        menuGroup: String,
        foodGroup: String,
        extraGroup: String,
    },
});
