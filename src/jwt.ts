import jwt from "jsonwebtoken";
import config from "./config";
import { NextFunction, Request, Response } from "express";


const protectedRoutes = ["/chats"]

export const verify = (req: Request, res: Response, next: NextFunction) => {
    if (req.url in protectedRoutes) {
        if (!req.headers.authorization) {
            return res.status(401).send({ message: "No token provided" });
        }

        const token = req.headers.authorization?.split(" ")[1];
        jwt.verify(token, config.JWT_SECRET, (err: any, decoded: any) => {
            if (err) {
                return res.status(401).send({ message: "Invalid token" });
            }

            req.query.user = decoded;
            next()
        })
    } else next()
}
