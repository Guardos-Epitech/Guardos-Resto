import * as express from 'express';
const router = express.Router();
import {
    changeDishByName, createNewDish, deleteNewDishByName,
    getAllDishes, getDishesByRestaurantName
}
    from '../controllers/dishesController';
import {checkIfNameExists} from '../middleware/dishesMiddelWare';

router.get('/',async (req, res) => {
    const dishes = await getAllDishes();
    res.status(200)
        .send(dishes);
});

router.get('/:name',async (req, res) => {
    const dishes = await getDishesByRestaurantName(req.params.name);
    res.status(200)
        .send(dishes);
});

router.post('/:name',async (req, res) => {

    if (!checkIfNameExists(req.body)) {
        res.status(400)
            .send('Name is missing');
    }
    const dish = await createNewDish(req.params.name, req.body);
    res.status(200)
        .send(dish);
});

router.delete('/:name',async (req, res) => {
    //Error handling is missing
    const dish = await deleteNewDishByName(req.params.name, req.body.name);
    res.status(200)
        .send(dish);
});

router.post('/change/:name',async (req, res) => {
    //Error handling is missing
    const dish = await changeDishByName(req.params.name, req.body);
    res.status(200)
        .send(dish);

});

export default router;
