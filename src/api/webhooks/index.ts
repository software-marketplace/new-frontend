import { Router, Request, Response } from "express";
import { Products } from "../../model";

const router = Router();

router.post('/config', async (req: Request, res: Response) => {
    Products.findOneAndUpdate(
        { repository: req.body.repository },
        {
            product_name: req.body.config.product_name,
            product_description: req.body.config.product_description,
            images: req.body.config.images,
            display_image: req.body.config.display_image,
            built_by: req.body.config.built_by,
            rating: req.body.config.rating,
            Price: req.body.config.Price,
            tags: req.body.config.tags,
            repository: req.body.repository,
        },
        { upsert: true },
        function(err) {
            console.log(err)
            if (!err) return res.send({ "success": "Product updated" })
            res.status(500)
            return res.send({ "error": err })
        }
    )
})

export default router;
