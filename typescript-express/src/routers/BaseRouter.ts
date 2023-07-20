import { Router } from "express";
import IRouter from "./IRouter";

abstract class BaseRouter implements IRouter {
  public route: Router;

  constructor() {
    this.route = Router();
    this.routes();
  }

  public abstract routes(): void;
}

export default BaseRouter;
