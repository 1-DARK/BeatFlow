import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = Router();

router.get("/like", protectRoute, (req, res) => {
  // protect route is used for auth if the user is auth then it will run the /like route
  req.auth.userId;
  res.send("user route");
});

export default router;
