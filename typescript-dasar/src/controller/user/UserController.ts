import Controller from "../Controller";

class UserController<T> extends Controller<T> {
  constructor(role: T, status: boolean) {
    super("Diky", role, status);
  }
}

export default UserController;
