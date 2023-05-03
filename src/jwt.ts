import jwt from "jsonwebtoken";
import config from "./config";
import { NextFunction, Request, Response } from "express";


const protectedRoutes = ["/chats"]

export const verify = async (req: Request, res: Response, next: NextFunction) => {
    if (req.path in protectedRoutes) {

        if (!req.headers.authorization) {
            return res.status(401).send({ message: "No token provided" });
        }

        const token = req.headers.authorization?.split(" ")[1];

        if (token.substring(0, 3) !== "ghu") {
            //const response = await fetch(`https://github.com/applications/Iv1.aff67714bc9e4d05/tokens/${token}`, {
            //headers: {
            //Authorization: "Basic SXYxLmFmZjY3NzE0YmM5ZTRkMDU6MTk3NWU2ODU5MDcwN2RhOTM5OTNkODMzYmNhZWQ1OTBiMGI0Zjk5Zg=="
            //}
            //})

            const response = await fetch(`https://api.github.com/user`, {
                headers: {
                    Authorization: `token ${token}`
                }
            })

            if (response.status !== 200) {
                return res.status(401).send({ message: "Invalid token" });
            }

            const data = await response.json();
            console.log(data)
            req.query.user = data;


            next()
        } else {
            jwt.verify(token, config.JWT_SECRET, (err: any, decoded: any) => {
                if (err) {
                    return res.status(401).send({ message: "Invalid token" });
                }

                req.query.user = decoded;
                next()
            })
        }
    } else next()
}
