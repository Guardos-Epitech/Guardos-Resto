import {ingredientsSchema} from '../models/ingredientsInterfaces';
import mongoose from 'mongoose';

export async function createNewIngredient(name: string, id: number) {
    const IngredientSchema = mongoose.model('IngredientsMVP',
        ingredientsSchema);
    const upload = new IngredientSchema({
        _id: id,
        name: name,
    });
    await upload.save();
    console.log('Ingredient ' + name + ' saved ' + ' with id ' + id);
}

export async function getAllIngredients() {
    const IngredientSchema = mongoose.model('IngredientsMVP',
        ingredientsSchema);
    return IngredientSchema.find();
}

export async function deleteIngredient(name: string, id: number) {
    const IngredientSchema = mongoose.model('IngredientsMVP',
        ingredientsSchema);
    await IngredientSchema.deleteOne({ _id: id });
    console.log('Ingredient ' + name + ' deleted ' + ' with id ' + id);

}
