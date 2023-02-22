import express, { Express, Request, Response } from 'express';
import { connect, connection } from "mongoose";
import dotenv from 'dotenv';

import webhooksRouter from "./api/webhooks";
import productsRouter from "./api/products";

 var winston = require('winston'),
    expressWinston = require('express-winston');

dotenv.config();

// Server
const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

// Status API
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
    // res.send(getAuthToken())
});

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
        ignoreRoute: function () { return false; } // optional: allows to skip some log messages based on request and/or response
}));

// app.use('/github_app', githubAppRouter);
app.use('/webhooks', webhooksRouter);
app.use('/products', productsRouter);
// app.listen(port, () => {
//     console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });

const mongoString: string | undefined = process.env.DATABASE_URL
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
