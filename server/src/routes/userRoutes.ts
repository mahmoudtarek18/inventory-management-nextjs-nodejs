import { Router } from "express";
import { getUsers } from "../controllers/usersController";

const router = Router();

router.route("/").get(getUsers);

export default router;
