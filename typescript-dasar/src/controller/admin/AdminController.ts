import Controller from "../Controller";

class AdminController<T> extends Controller<T> {
  constructor(role: T, status: boolean) {
    super("administrator", role, status);
  }
}

export default AdminController;
