import IController from "./IController";

abstract class Controller<T> implements IController<T> {
  public name: string;
  public role: T;
  public status: boolean;

  constructor(name: string, role: T, status: boolean) {
    this.name = name;
    this.role = role;
    this.status = status;
  }

  create(): void {
    throw new Error("Method not implemented.");
  }
  read(): void {
    throw new Error("Method not implemented.");
  }
  update(): void {
    throw new Error("Method not implemented.");
  }
  delete(): void {
    throw new Error("Method not implemented.");
  }
}

export default Controller;
