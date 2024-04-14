import CompletedCausesModel from "../../model/cause/completedCauses.js";
import CauseModel from "../../model/cause/index.js";
import DonationModel from "../../model/donation/index.js";
import UserModel from "../../model/user/index.js";
import CompletedCauseController from "../cause/completedCauses.js";


const UserController ={

    userProfile:async(req,res) =>{
        const userId=req.user.userId;
        console.log("userId====",userId)

        try {
            const data = await UserModel.findByPk(userId)
    
            res.json(data);    
        } catch (error) {
            console.log("Error in getting data", error)
        }
    },

    updateUser:async(req,res) =>{
        try {
            const userId = req.user.userId; 
            const userDataToUpdate = req.body; 
            await UserModel.update(userDataToUpdate, { where: { id: userId } });
            res.status(200).json({ message: 'User profile updated successfully' });
        } catch (error) {
            console.error('Error updating user profile:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    
    viewMyDonation: async (req,res) =>{
        const userId=req.user.userId;
        console.log("userId====",userId)

        try {
            const data = await DonationModel.findAll({
                where:{
                    UserId:userId
                },
                include: [CauseModel]
            })
    
            res.json(data);    
        } catch (error) {
            console.log("Error in getting data", error)
        }
    },

    viewCurrentCauses:async (req,res) =>{
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
    },

    viewCompletedCauses:async(req,res) =>{
        const userId=req.user.userId;
        console.log("userId====😃",userId)
        try {
            const data = await CompletedCausesModel.findAll({
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