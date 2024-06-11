"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { verify } from "jsonwebtoken";
// Middleware to conditionally apply another middleware unless the route matches a specific path
function unless(path, middleware) {
    return (req, res, next) => {
        // const sessionCookie = req.session?.jwt;
        // const persistentCookie = req.cookies?.persistent;
        if (req.path.startsWith(path)) {
            return next();
        }
        else if (req.path.endsWith("teachers")) {
            // if (sessionCookie || persistentCookie) {
            //   verify(sessionCookie || persistentCookie, publicKey, {
            //     algorithms: ["RS256"],
            //   });
            //   return next();
            // }
            return next();
        }
        middleware(req, res, next);
    };
}
exports.default = unless;
//# sourceMappingURL=unless-route.js.map