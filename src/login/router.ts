import { Router } from "express";

import loginMiddleware from '../middleware/login';

import * as controller from "./controller";

export const Register = (router: Router) => {
    router.post("/v1/login", loginMiddleware, controller.postLogin);
};
