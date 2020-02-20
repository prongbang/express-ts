import express, { Request, Response, NextFunction } from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import lusca from "lusca";              // security middleware.
import passport from "passport";
import logger from 'morgan';
import createError from 'http-errors';

import { Router } from "./routes";
import { PORT } from "./util/secrets";
import HttpException from './core/exception/http';

// Create Express server
const app = express();

// Express configuration
app.set("port", PORT || 4000);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.use(Router);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(err));
});

export default app;