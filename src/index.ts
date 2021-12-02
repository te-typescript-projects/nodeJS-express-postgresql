import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import { RequestHandler } from 'express-serve-static-core';
import homeRouter from './routes/shop';
import adminData from './routes/admin';
import userRoute from './routes/user';
import errorRoute from './controllers/error';

createConnection()
  .then(_connection => {
    const app = express();

    app.set('view engine', 'ejs');
    
    app.use(express.static('dist'));

    app.use('/user', userRoute.router);

    app.use('/admin', adminData.router);

    app.use(homeRouter);

    app.use(errorRoute.error404);

    app.use(express.urlencoded({extended: true}) as RequestHandler);

    app.listen(8080), console.log('Listening at 8080');
  })
  .catch(error => console.log(error));
