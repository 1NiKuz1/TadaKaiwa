import express from "express";
const router = express.Router();
import UserRoute from "./route.user";

router.use("/api/users", UserRoute);

export default router;
