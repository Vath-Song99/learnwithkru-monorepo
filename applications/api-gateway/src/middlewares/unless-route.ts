import { NextFunction, Request, Response } from "express";

// Middleware to conditionally apply another middleware unless the route matches a specific path
export default function unless(
  path: string,
  middleware: (req: Request, res: Response, next: NextFunction) => void
) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { path: reqPath } = req;

    if (reqPath.startsWith(path) || reqPath.endsWith("teachers")) {
      return next();
    }

    middleware(req, res, next);
  };
}
