import {Router} from "express"
import createOrder from './../controller/paypal/createOrder.js';
import captureOrder from './../controller/paypal/capturreOrder.js';
import verifyToken from "../middleware/validateUser.js";


const paypalRouter = Router();

paypalRouter.post("/api/orders", createOrder);
paypalRouter.post("/api/orders/:orderID/capture",verifyToken, captureOrder);

export default paypalRouter;


