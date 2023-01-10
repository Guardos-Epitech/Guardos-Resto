import {IIngredientsCommunication} from '../models/communicationInterfaces';
import mongoose from 'mongoose';
import {ingredientsSchema} from '../models/ingredientsInterfaces';
import {findMaxIndexIngredients} from '../controllers/ingredientsController';

export async function checkIfIdExists(id: number) {
    const IngredientSchema = mongoose.model('IngredientsMVP',
        ingredientsSchema);
    const ingredient = await IngredientSchema.findOne({_id: id})
        .then((result) => {
            return result;
        });
    return ingredient;
}
export async function checkIfNameAndIdExists(req: IIngredientsCommunication) {
    const id = req.id ? req.id : (await findMaxIndexIngredients() + 1);

    if (!req.name || !id) {
        console.log('Missing name or id');
        return false;
    }
    const ingredient = await checkIfIdExists(id);

    console.log(!ingredient);
    return !ingredient;
}
