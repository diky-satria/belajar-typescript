import { Request, Response, NextFunction } from "express";

export const UserCreate = (req: Request, res: Response, next: NextFunction) => {
  let auth: boolean = true;
  if (auth) {
    next();
  } else {
    return res.status(401).json({
      message: "Unauthenticated",
    });
  }
};
