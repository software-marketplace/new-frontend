import express, { Express } from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import dotenv from 'dotenv';
import cors from 'cors';

import { logger } from './logger';
import { options } from './swagger';
import { initDatabase } from './database';
import { verify } from './jwt';

import statusRoute from "./api";
import webhooksRouter from "./api/webhooks";
import productsRouter from "./api/products";
import authRouter from "./api/auth";
import chatsRouter from "./api/chats";


dotenv.config();

// Server
const app: Express = express();
const port: number = parseInt(process.env.PORT ?? "8000");

// middleware
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(verify);

// routes
app.get('/', statusRoute);
app.use('/webhooks', webhooksRouter);
app.use('/products', productsRouter);
app.use('/auth', authRouter);
app.use('/chats', chatsRouter);

// swagger
const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// database
initDatabase(app, port);
