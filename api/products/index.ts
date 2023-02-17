import { Router, Request, Response } from "express";
import { Products } from "../../model/products"

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const data = await Products.find({});
    res.status(200)
    res.send(data)
})

export default router
