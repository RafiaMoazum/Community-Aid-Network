import { Router } from "express";
import verifyToken from "../middleware/validateUser.js";
import userData from "../controller/user/validateUser.js";
import UserIdentification from "../middleware/userIdentification.js";
import UserController from "../controller/user/userProfile.js";

const userRouter = Router()

userRouter.post("/user", verifyToken, userData)
userRouter.get("/userProfile", UserIdentification,UserController.userProfile)
userRouter.put("/updateUser", UserIdentification,UserController.updateUser)
userRouter.get("/viewMyDonations", UserIdentification,UserController.viewMyDonation)
userRouter.get("/viewCurrentCauses", UserIdentification,UserController.viewCurrentCauses)
userRouter.get("/viewCompletedCauses", UserIdentification,UserController.viewCompletedCauses)

export default userRouter;