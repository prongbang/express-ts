import passport from "passport";

import { ExtractJwt, Strategy } from "passport-jwt";

import { JWT_SECRET } from "../util/secrets";

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
};

const jwtAuth = new Strategy(jwtOptions, (payload, done) => {
    if (payload.sub === "admin") done(null, true);
    else done(null, false);
});

passport.use(jwtAuth);

export = passport.authenticate("jwt", { session: false });
