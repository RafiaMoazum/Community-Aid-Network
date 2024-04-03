import CauseModel from "../../model/cause/index.js";
import DonationModel from "../../model/donation/index.js";
import UserModel from "../../model/user/index.js";


const DonationController = {
    addDonation: async(req,res) =>{
        console.log("We are inside Add Donation Contoller and here is the user's Data: ", req.user)
        const userId=req.user.userId;
        const causeId=req.params.causeId
        console.log("User Id========", userId)
        try {
            console.log("Request Body:", req.body);

            console.log("Creating Donation with userId:", userId);
            const data = await DonationModel.create({
                donation_amount:req.body.donation_amount,
                UserId:userId,
                CauseId:causeId
            })
            console.log("Donation created successfully:", data);
            res.json(data);
        } catch (error) {
            console.log("Error in adding cause", error)
        }
    },
    getDonationsData: async (req, res) => {
        try {
          const data = await DonationModel.findAll({
            include: [
              { model: UserModel },
              { model: CauseModel }
            ]
          });
          res.json({
            data
          });
        } catch (error) {
          console.log("Error getting donations data:", error);
          res.status(500).json({ error: "Internal server error" });
        }
      }
      
}

export default DonationController;