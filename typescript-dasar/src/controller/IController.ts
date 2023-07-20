interface IController<T> {
  name: string;
  role: T;
  status: boolean;
  create(): void;
  read(): void;
  update(): void;
  delete(): void;
}

export default IController;
