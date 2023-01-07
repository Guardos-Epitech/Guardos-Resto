import {IingredientsCommunication} from '../models/communicationInterfaces';
import mongoose from 'mongoose';
import {ingredientsSchema} from '../models/ingredientsInterfaces';

export async function checkIfIdExists(id: number) {
    const IngredientSchema = mongoose.model('IngredientsMVP',
        ingredientsSchema);
    const ingredient = await IngredientSchema.findOne({_id: id})
        .then((result) => {
            return result;
        });
    return ingredient;
}
export async function checkIfNameAndIdExists(req: IingredientsCommunication) {
    const id = req.id;

    if (!req.name || !req.id) {
        console.log('Missing name or id');
        return false;
    }
    const ingredient = await checkIfIdExists(id);

    console.log(!ingredient);
    return !ingredient;
}
