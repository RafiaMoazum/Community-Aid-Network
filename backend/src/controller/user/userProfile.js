import CauseModel from "../../model/cause/index.js";
import DonationModel from "../../model/donation/index.js";


const UserController ={
    viewAllDonation: async (req,res) =>{
        const userId=req.user.userId;
        console.log("userId====",userId)

        try {
            const data = await DonationModel.findAll({
                where:{
                    UserId:userId
                }
            })
    
            res.json(data);    
        } catch (error) {
            console.log("Error in getting data", error)
        }
    },

    viewAllCauses:async (req,res) =>{
        const userId=req.user.userId;
        console.log("userId====",userId)
        try {
            const data = await CauseModel.findAll({
                where:{
                    UserId:userId
                }
            })
    
            res.json(data);    
        } catch (error) {
            console.log("Error in getting data", error)
        }
    }
}

export default UserController;