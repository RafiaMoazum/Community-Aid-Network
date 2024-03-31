import {Router} from "express"
import { upload } from "../multer/multerConfig.js"
import PendingApprovalController from "../controller/cause/pendingApprovalController.js"
import validateUser from "../middleware/validateUser.js"


const pendingApprovalRouter=Router();

pendingApprovalRouter.post("/addCause",upload.single('image'), PendingApprovalController.addCause);
pendingApprovalRouter.get("/getAllPendingCauses", PendingApprovalController.getAllPendingCauses)


export default pendingApprovalRouter;