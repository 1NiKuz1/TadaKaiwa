import express from "express";
import UserController from "../controllers/controller.user";

const router = express.Router();

router.get("/", UserController.all);

export default router;
