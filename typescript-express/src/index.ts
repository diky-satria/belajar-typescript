import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// router
import RootRouter from "./routers/RootRouter/RootRouter";
import UserRouter from "./routers/UserRouter/UserRouter";

class App {
  public app: Express;

  constructor() {
    this.app = express();
    dotenv.config();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(express.json());
  }

  protected routes(): void {
    this.app.use("/", RootRouter);
    this.app.use("/api/v1/", UserRouter);
  }
}

const app = new App().app;
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
