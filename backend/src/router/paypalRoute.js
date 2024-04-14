import {Router} from "express"
import createOrder from './../controller/paypal/createOrder.js';
import captureOrder from './../controller/paypal/capturreOrder.js';


const paypalRouter = Router();

paypalRouter.post("/api/orders", createOrder);
paypalRouter.post("/api/orders/:orderID/capture", captureOrder);

export default paypalRouter;


