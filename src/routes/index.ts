import express from 'express';
var router = express.Router();

import * as loginRouter from "../login/router";
import * as customerRouter from "../customer/router";

loginRouter.Register(router);
customerRouter.Register(router);

export const Router = router;
