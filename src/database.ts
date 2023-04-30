import { Express } from 'express';
import { connect, connection, set } from "mongoose";
import { forceData } from './forceData';

export const initDatabase = (app: Express, port: number): void => {
    const mongoString: string | undefined = process.env.DATABASE_URL
    set('strictQuery', false);
    if (mongoString) connect(mongoString);
    else throw new Error("set \"DATABASE_URL\" in .env file");

    const database = connection
    database.on('error', (error) => {
        console.error(error);
    })

    database.once('connected', () => {
        if (process.env.FORCE_DATA) {
            forceData();
        }

        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
        });
    })
}
