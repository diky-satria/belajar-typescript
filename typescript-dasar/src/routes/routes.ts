import AdminController from "../controller/admin/AdminController";
import UserController from "../controller/user/UserController";

let ac = new AdminController("admin", true);
console.log(ac);

let uc = new UserController("user", false);
console.log(uc);
