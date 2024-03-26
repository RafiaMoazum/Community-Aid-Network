import {Router} from "express"
import CauseController from "../controller/cause/index.js";


const causeRouter=Router();

causeRouter.post("/addCause", CauseController.addCause);

export default causeRouter;