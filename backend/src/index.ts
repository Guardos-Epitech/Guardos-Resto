import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path = require('path');
import { connectDataBase, SUCCEED } from './controllers/connectDataBase';
import basicApiIngredients from './routes/ingredients';
import products from './routes/products';
import dishes from './routes/dishes';
import restaurants from './routes/restaurants';
import cors from 'cors';

async function main() {
    const app = express();
    const port = 8082;

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(cors({ origin: String('http://localhost:8080/') }));

    const dbStatus = await connectDataBase();

    if(dbStatus === SUCCEED) {
        app.listen(port, () => {
            return console.log(`RestaurantBE is listening at http://localhost:${port}`);
        });
    }

    app.use('/', basicApiIngredients);
    app.use('/api/products', products);
    app.use('/api/dishes', dishes);
    app.use('/api/restaurants', restaurants);

    // catch 404 and forward to error handler
  app.use(function(req: any, res: any, next: any) { /* eslint-disable-line */
        next(createError(404));
    });

    // error handler
  app.use(function(err: any, req: any, res: any) { /* eslint-disable-line */
    // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
}

try {
    main();
} catch (err: unknown) {
    console.error(err);
}
