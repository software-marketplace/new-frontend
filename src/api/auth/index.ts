import { Router, Request, Response } from "express";

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

export default router;
