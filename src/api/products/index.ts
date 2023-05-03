import { Router, Request, Response } from "express";
import { Products } from "../../model/products"

const router = Router();

/**
 * @swagger
 * /products:
 *   get:
 *     tags: [Products]
 *     description: Get all Products
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *           description: Search by name
 *       - in: query
 *         name: filter_categories
 *         schema:
 *           type: array
 *           description: Filter by categories
 *       - in: query
 *         name: filter_price
 *         schema:
 *           type: string
 *           description: Filter by price range
 *           example: 0-100
 *           default: "" 
 *       - in: query
 *         name: filter_min_rating
 *         schema:
 *           type: number
 *           description: Filter by minimum rating
 *           example: 3
 *   responses:
 *     200:
 *       description: Returns all products
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Product'
 */
router.get('', async (req: Request, res: Response) => {
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

    const data = await Products.find(query)
    return res.status(200).send(JSON.stringify(data))
})

export default router
