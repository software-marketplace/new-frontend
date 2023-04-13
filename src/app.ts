import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { connect, connection, set } from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import dotenv from 'dotenv';

import webhooksRouter from "./api/webhooks";
import productsRouter from "./api/products";
import authRouter from "./api/auth";

const cors = require('cors');

dotenv.config();

// Server
const app: Express = express();
const port = process.env.PORT;

// json serializer
app.use(express.json());
app.use(cors({
    origin: '*'
}));


// logger
var winston = require('winston'),
    expressWinston = require('express-winston');
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function() { return false; } // optional: allows to skip some log messages based on request and/or response
}));

const definition = {
    info: {
        // API information (required)
        title: 'Software Marketplace', // Title (required)
        version: '1.0.0', // Version (required)
    },
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            scheme: 'bearer',
            in: 'header',
        },
    },
};

const options = {
    definition,
    apis: ['../dist/app.js'],
};

// swagger
const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
* @openapi
* /:
*   get:
*     description: Welcome to swagger-jsdoc!
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
app.get('/', (_: Request, res: Response) => {
    res.send('Server is up');
});

// app.use('/github_app', githubAppRouter);
app.use('/webhooks', webhooksRouter);
app.use('/products', productsRouter);
app.use('/auth', authRouter);

// database
const mongoString: string | undefined = process.env.DATABASE_URL
set('strictQuery', false);
if (mongoString) connect(mongoString);
else throw new Error("set \"DATABASE_URL\" in .env file");

const database = connection
database.on('error', (error) => {
    console.error(error);
})

database.once('connected', () => {
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
})
