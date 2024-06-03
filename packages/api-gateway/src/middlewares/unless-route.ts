import { publicKey } from "@api-gateway/server";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

// Middleware to conditionally apply another middleware unless the route matches a specific path
export default function unless(path: string, middleware: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    const sessionCookie = req.session?.jwt;
    const persistentCookie = req.cookies?.persistent;
    if (req.path.startsWith(path)) {
      return next();
    } else if (req.path.endsWith("teacher-list")) {
      if (sessionCookie || persistentCookie) {
        verify(sessionCookie || persistentCookie, publicKey, {
          algorithms: ["RS256"],
        });
        return next();
      }
      return next();
    }
    middleware(req, res, next);
  };
}
