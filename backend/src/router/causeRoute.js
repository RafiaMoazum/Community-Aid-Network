import {Router} from "express"
import CauseController from "../controller/cause/index.js";
import { upload } from "../multer/multerConfig.js"
import CompletedCauseController from "../controller/cause/completedCauses.js";


const causeRouter=Router();

causeRouter.get("/getAllCauses", CauseController.getAllCauses);
causeRouter.get("/getSpecificCauseDetails/:id",CauseController.getSpecificCauseDetails);
causeRouter.post("/acceptCause/:id",CauseController.acceptCause);
causeRouter.post("/completedCause/:id",CompletedCauseController.completedCause);
causeRouter.get("/getAllCompletedCauses",CompletedCauseController.getAllCompletedCauses);


export default causeRouter;