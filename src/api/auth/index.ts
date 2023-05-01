import { Router, Request, Response } from "express";
import { Users } from "../../model";
import { getHash } from "./utils";
import { sign } from "./jwt";

const router = Router();

/**
 * @swagger
 * /auth/github:
 *   post:
 *     tags: [Auth]
 *     description: Login with github
 *     requestBody:
 *       description: Login with github
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *               code:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Returns access token
 */
router.post("/github", async (req: Request, res: Response) => {
    const { code } = req.body;
    const response = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            client_id: "Iv1.aff67714bc9e4d05",
            client_secret: "1975e68590707da93993d833bcaed590b0b4f99f",
            code: code,
        })
    })

    const data = await response.json();
    if (response.status !== 200) {
        return res.status(400).send({ status: response.status, message: data.message });
    }

    res.status(200).send(data);
})

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Login with email and password
 *     requestBody:
 *       description: Login with email and password
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 required: true
 *               password:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: Returns access token
 */
router.post("/login", async (req: Request, res: Response) => {
    let { email, password } = req.body;
    password = getHash(password);

    let user: any = await Users.find({ email: email, password: password });
    if (!user.length) return res.status(401).send({ message: "Failed to login" });

    const token = sign({ email: email, name: user[0].name })
    return res.status(200).send({ access_token: token, email: email, name: user[0].name });
})

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Register with email, password, name and mobile number
 *     requestBody:
 *       description: Register with email, password, name and mobile number
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 required: true
 *                 description: Name of the Users
 *               email:
 *                 type: string
 *                 required: true
 *                 description: Email of the Users
 *               password:
 *                 type: string
 *                 required: true
 *                 description: Password of the Users
 *               mobile:
 *                 type: string
 *                 required: true
 *                 description: Mobile number of the Users
 *     responses:
 *       200:
 *         description: Returns success message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: Register Success
 */
router.post("/register", async (req: Request, res: Response) => {
    const { name, email, password, mobile } = req.body;

    const user = await Users.create({
        name: name,
        email: email,
        password: getHash(password),
        mobile: mobile,
    })

    if (!user) {
        return res.status(400).send({ message: "Failed to register" });
    }

    return res.status(200).send({ message: "Register success" });
})

export default router;
