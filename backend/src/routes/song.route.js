import { Router } from "express";
import { getAllSongs } from "../controller/song.controller.js";
const router = Router();

router.get("/", getAllSongs);

export default router;
