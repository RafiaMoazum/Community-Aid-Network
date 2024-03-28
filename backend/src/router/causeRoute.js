import {Router} from "express"
import CauseController from "../controller/cause/index.js";
import { upload } from "../multer/multerConfig.js"


const causeRouter=Router();

causeRouter.get("/getAllCauses", CauseController.getAllCauses);
causeRouter.get("/getSpecificCauseDetails/:id",CauseController.getSpecificCauseDetails)

export default causeRouter;