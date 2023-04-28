import { Router, Request, Response } from "express";
import { Users } from "../../model";
import { getHash } from "./utils";
import { sign } from "./jwt";

const router = Router();

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

    res.send(data);
})

router.post("/login", async (req: Request, res: Response) => {
    let { email, password } = req.body;
    password = getHash(password);

    const user = await Users.find({ email: email, password: password });

    if (!user) return res.status(401).send({ message: "Failed to login" });

    const token = sign({ email: email })

    return res.status(200).send({ access_token: token });
})

router.post("/register", async (req: Request, res: Response) => {
    const { name, email, password, mobile_number } = req.body;

    const user = await Users.create({
        name: name,
        email: email,
        password: getHash(password),
        mobile_number: mobile_number,
    })

    if (!user) {
        return res.status(400).send({ message: "Failed to register" });
    }

    return res.status(200).send({ message: "Register success" });
})

export default router;
