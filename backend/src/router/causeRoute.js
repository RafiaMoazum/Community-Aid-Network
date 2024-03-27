import {Router} from "express"
import CauseController from "../controller/cause/index.js";
import { upload } from "../multer/multerConfig.js"


const causeRouter=Router();

causeRouter.post("/addCause", upload.single('image'), CauseController.addCause);
causeRouter.get("/getAllCauses", CauseController.getAllCauses);
causeRouter.get("/getSpecificCauseDetails/:id",CauseController.getSpecificCauseDetails)

export default causeRouter;