import jwt from "jwt-simple";
import { Request, Response } from "express";
import { JWT_SECRET } from "../util/secrets";

export const postLogin = (req: Request, res: Response) => {
    const payload = {
        sub: req.body.username,
        iat: new Date().getTime() // issued at time (created at)
    };
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({ token: jwt.encode(payload, JWT_SECRET) }));
};
