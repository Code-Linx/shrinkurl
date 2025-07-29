import { Router } from "express";
import { login, register } from "../controller/User";

const authRoutes: Router = Router();
authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

export default authRoutes;
