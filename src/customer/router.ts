import { Router } from "express";

import jwtMiddleware from "../middleware/jwt";

import * as controller from "./controller";

export const Register = (router: Router) => {
    router.get("/v1/customers", jwtMiddleware, controller.getCustomers);
};
