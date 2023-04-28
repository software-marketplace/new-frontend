import { Router, Request, Response } from "express";
import { Products } from "../../model/products"

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const query: any = {}

    // get name from search query params if exist
    if (req.query.search) {
        query['name'] = { $regex: req.query.search as string, $options: 'i' }
    }

    // get category from search query params if exist
    if (req.query.filter_categories) {
        query['category'] = { $in: req.query.filter_categories as string[] }
    }

    // get price from search query params if exist
    if (req.query.filter_price) {
        const price = req.query.filter_price as string
        const priceRange = price.split('-')
        query['price'] = { $gte: priceRange[0], $lte: priceRange[1] }
    }

    // get rating from search query params if exist
    if (req.query.filter_min_rating) {
        query['rating'] = { $gte: req.query.filter_min_rating as string }
    }

    const data = await Products.find(query);
    res.status(200)
    res.send(data)
})

export default router
