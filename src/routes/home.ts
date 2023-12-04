import express from "express";
import { homeControllrer } from "../controllers/home";

const router = express.Router();

router.get("/home", homeControllrer().getHomeStaticData);

export default router;
