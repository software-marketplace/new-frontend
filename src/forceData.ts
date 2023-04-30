import { Products } from "./model/products";
import fs from 'fs';

export function forceData(): void {
    fs.readFile('data/data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const products = JSON.parse(data);
        Products.insertMany(products, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });
}
