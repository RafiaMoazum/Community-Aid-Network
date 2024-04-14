import { Router } from "express";
import verifyToken from "../middleware/validateUser.js";
import userData from "../controller/user/validateUser.js";
import UserIdentification from "../middleware/userIdentification.js";
import UserController from "../controller/user/userProfile.js";

const userRouter = Router()

userRouter.post("/user", verifyToken, userData)
userRouter.get("/viewAllDonations", UserIdentification,UserController.viewAllDonation)
userRouter.get("/viewAllCauses", UserIdentification,UserController.viewAllCauses)

export default userRouter;