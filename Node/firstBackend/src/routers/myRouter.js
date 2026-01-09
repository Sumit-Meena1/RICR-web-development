import express from "express";
import { UserLogin } from "../controllers/myController.js";
import { UserLogout } from "../controllers/myController.js";
import { UserRegister } from "../controllers/myController.js";
const router = express.Router();
router.post("/register", UserRegister);
router.post("/login", UserLogin);
router.get("/logout", UserLogout);

export default router;
