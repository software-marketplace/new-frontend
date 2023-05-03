import { Router, Request, Response } from "express";
import { Chats } from "../../model/chats"

const router = Router();

/**
 * @swagger
 * /chats:
 *   get:
 *     tags: [Chats]
 *     description: Get all Chats
 *     parameters:
 *       - in: query
 *         name: to
 *         required: true
 *         schema:
 *           type: string
 *           description: Chats to user
 *   responses:
 *     200:
 *       description: Returns all chats to a particular user
 */
router.get('', async (req: Request, res: Response) => {
    const { user, to } = req.query;
    const chats = await Chats.find({
        $or: [{ sender: user, receiver: to }, { sender: to, receiver: user }]
    }).sort({ timestamp: 1 });

    console.log(chats)
    res.status(200).send(chats);
})

export default router
