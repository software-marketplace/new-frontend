import { Router, Request, Response } from "express";
import { Products } from "../../model";

const router = Router();

router.post('/config', async (req: Request, res: Response) => {
    // const productExist = await Products.find({ repository: req.body.repo })

    // if (productExist.length > 0) {
    Products.findOneAndUpdate(
        { repository: req.body.repository },
        {
            name: req.body.config.name,
            description: req.body.config.description,
            repository: req.body.repository,
            images: [], builtBy: req.body.builtBy, tags: req.body.tags
        },
        { upsert: true },
        function(err, doc) {
            if (!err) return res.send({ "success": "Product updated" })
            res.status(500)
            return res.send({ "error": err })
        }
    )
    // }
})

export default router;
