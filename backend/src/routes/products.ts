import * as express from 'express';
const router = express.Router();
import {getAllRestoProducts} from '../controllers/restaurantController';

router.get('/:name',async (req, res) => {
    const products = await getAllRestoProducts(req.params.name);
    return res.status(200)
        .send(products);
});

export default router;
