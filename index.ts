import express, { Express, Request, Response } from 'express';
import { connect, connection } from "mongoose";
import dotenv from 'dotenv';

// import { getAuthToken } from './api/githubApp/util';
// import { router as githubAppRouter } from "./api/githubApp";
// import { router as userRouter } from "./api/user";
import webhooksRouter from "./api/webhooks";
import productsRouter from "./api/products";

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
