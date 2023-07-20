import { Request, Response } from "express";
import IController from "../IController";
import { sequelize } from "../../db/models/index.js";
import { QueryTypes } from "sequelize";
const Models = require("../../db/models/index.js");

class UserController implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      var data = await sequelize.query(`SELECT * FROM users`, {
        type: QueryTypes.SELECT,
      });

      return res.status(200).json({
        message: "User all",
        data: data,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Server error",
      });
    }
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { firstName, lastName, email } = req.body;

      await Models.users.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
      });

      return res.json({
        message: "User create successfully",
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Server error",
      });
    }
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      var data = await sequelize.query(`SELECT * FROM users WHERE id = ${id}`, {
        type: QueryTypes.SELECT,
      });

      return res.json({
        message: "User detail",
        data: data,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Server error",
      });
    }
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const { firstName, lastName, email } = req.body;

      var data = await sequelize.query(`SELECT * FROM users WHERE id = ${id}`, {
        type: QueryTypes.SELECT,
      });

      if (data.length > 0) {
        await Models.users.update(
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
          },
          {
            where: {
              id: id,
            },
          }
        );

        return res.json({
          message: "User updated successfully",
        });
      } else {
        return res.json({
          message: "User doesn't exists",
        });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Server error",
      });
    }
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      var data = await sequelize.query(`SELECT * FROM users WHERE id = ${id}`, {
        type: QueryTypes.SELECT,
      });

      if (data.length > 0) {
        await Models.users.destroy({
          where: {
            id: id,
          },
        });

        return res.json({
          message: "User deleted successfully",
        });
      } else {
        return res.json({
          message: "User doesn't exists",
        });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Server error",
      });
    }
  };
}

export default new UserController();
