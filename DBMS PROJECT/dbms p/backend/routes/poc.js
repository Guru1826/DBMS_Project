import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { getPoc } from "../controllers/poc.js";
const router=express.Router();

router.get("/all",isAuthenticated,getPoc);

export default router; 