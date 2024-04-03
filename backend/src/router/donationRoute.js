import {Router} from "express"
import DonationController from "../controller/donation/index.js";
import UserIdentification from "../middleware/userIdentification.js";


const donationRouter=Router();

donationRouter.post("/addDonation/:causeId", UserIdentification, DonationController.addDonation);
donationRouter.get("/getDonationsData",DonationController.getDonationsData)

export default donationRouter;