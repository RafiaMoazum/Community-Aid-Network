import {Router} from "express"
import { upload } from "../multer/multerConfig.js"
import PendingApprovalController from "../controller/cause/pendingApprovalController.js"
import UserIdentification from "../middleware/userIdentification.js";



const pendingApprovalRouter=Router();

pendingApprovalRouter.post("/addCause", upload.single('image'),UserIdentification, PendingApprovalController.addCause);
pendingApprovalRouter.get("/getAllPendingCauses", PendingApprovalController.getAllPendingCauses)
pendingApprovalRouter.post("/rejectCause/:id", PendingApprovalController.rejectCause)


export default pendingApprovalRouter;