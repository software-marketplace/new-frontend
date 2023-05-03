import { expressjwt } from "express-jwt";
import jwt from "jsonwebtoken";

export const jwtValidator = expressjwt({
    secret: process.env.JWT_SECRET as string ?? "secret",
    algorithms: ["HS256"],
})

export const sign = (payload: any) => {
    return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "100h" });
}
