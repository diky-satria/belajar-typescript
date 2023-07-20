import { Request, Response } from "express";
import BaseRouter from "../BaseRouter";

class RootRouter extends BaseRouter {
  public routes(): void {
    this.route.get("/", (req: Request, res: Response) => {
      return res.json({
        message: "Welcome to Express + TypeScript Server",
      });
    });
  }
}

export default new RootRouter().route;
