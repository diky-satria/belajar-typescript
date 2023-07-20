import BaseRouter from "../BaseRouter";

// validation
import { UserCreate } from "../../validations";

// controller
import UserController from "../../controllers/UserController/UserController";

class UserRouter extends BaseRouter {
  public routes(): void {
    this.route.get("/user", UserCreate, UserController.index);
    this.route.post("/user", UserCreate, UserController.create);
    this.route.get("/user/:id", UserCreate, UserController.show);
    this.route.patch("/user/:id", UserCreate, UserController.update);
    this.route.delete("/user/:id", UserCreate, UserController.delete);
  }
}

export default new UserRouter().route;
