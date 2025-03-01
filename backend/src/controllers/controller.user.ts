import type { Request, Response, NextFunction } from "express";
import { User } from "../models";

class UserController {
  async all(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await User.findOne();
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new UserController();
