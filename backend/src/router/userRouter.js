import { Router } from "express";
import verifyToken from "../middleware/validateUser.js";
import userData from "../controller/user/validateUser.js";

const userRouter = Router()

userRouter.post("/user", verifyToken, userData)

export default userRouter;