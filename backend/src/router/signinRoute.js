import { Router } from "express";
import signInController from "../controller/signin/index.js";
const signInRouter = Router()

signInRouter.post('/signin', signInController.authenticateUser)

export default signInRouter;