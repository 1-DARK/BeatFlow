import { Router } from "express";
import { Song } from "../models/song.model.js";
import { User } from "../models/user.model.js";
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const totalSongs = await Song.countDocuments();
    const totalUsers = await User.countDocuments();
  } catch (error) {}
});

export default router;
