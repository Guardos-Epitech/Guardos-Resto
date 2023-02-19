import * as express from 'express';
const router = express.Router();
import {
    createNewIngredient,
    getAllIngredients,
    deleteIngredient,
    findMaxIndexIngredients, getIngredientByName
} from '../controllers/ingredientsController';
import { checkIfNameAndIdExists, checkIfIdExists }
    from '../middleware/ingredientsMiddleWare';
import { IIngredientsCommunication } from '../models/communicationInterfaces';
import {addRestoProduct} from '../controllers/restaurantController';

router.get('/get',async (req, res) => {
    const ingredients = await getAllIngredients();
    res.status(200)
        .send(ingredients);
});
router.post('/post', async (req, res) => {
    if (await checkIfNameAndIdExists(req.body as IIngredientsCommunication)) {
        const id =
            req.body.id ? req.body.id : (await findMaxIndexIngredients() + 1);
        await createNewIngredient(req.body.name, id);
        await addRestoProduct(req.body.name);
        res.status(200)
            .send('Ingredient '
                + req.body.name + ' saved ' + ' with id ' + id);
    } else {
        res.status(400)
            .send('Missing name or wrong id');
    }
});
router.delete('/delete', async (req, res) => {
    const id = req.body.id ? req.body.id :
        (await getIngredientByName(req.body.name));
    if (await checkIfIdExists(id)) {
        await deleteIngredient(req.body.name, id);
        res.status(200)
            .send('Ingredient '
                + req.body.name + ' deleted ' + ' with id ' + id);
    } else {
        res.status(400)
            .send('Ingredient not found');
    }
});

export default router;
