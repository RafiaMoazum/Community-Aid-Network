import { Router } from 'express';
import registrationController from '../controller/registeration/index.js';

const registrationRouter = Router();

registrationRouter.post('/registration', registrationController.addDetails);

export default registrationRouter;
