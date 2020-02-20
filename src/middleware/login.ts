import { Request, Response, NextFunction } from "express";

export = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.username === "admin" && req.body.password === "pass") next();
    else res.send("Wrong username and password");
};
