
import PendingApprovalModel from "../../model/cause/pendingApprovalModel.js";
import UserModel from "../../model/user/index.js";

const PendingApprovalController ={

    
    addCause: async (req,res) => {

        console.log("We are inside AddCause Contoller and here is the user's Data: ", req.user)
        const userId=req.user.userId;
        console.log("User Id========", userId)
        try {
            console.log("Creating Pending Approval with userId:", userId);
            const data = await PendingApprovalModel.create({
                title:req.body.title,
                category:req.body.category,
                details:req.body.details,
                goal_amount:req.body.goal_amount,
                image: req.file.path,
                UserId:userId
            })
            console.log("Pending Approval created successfully:", data);
            res.json({
                message:"Cause Added",
                data
            })
        } catch (error) {
            console.log("Error in adding cause", error)
        }
    },

    getAllPendingCauses:async (req,res) => {
        const data= await PendingApprovalModel.findAll({
            include:[UserModel]
        });
        res.json({
            data,
          });
    },

    rejectCause:async(req,res) => {
      try {
        let causeId = req.params.id;
        const cause = await PendingApprovalModel.findByPk(causeId);

        if(!cause){
            return res.json({message:"Cause not found"})
        }
        await cause.destroy();
        res.json({
            message:"Delete a Cause",
            deletedCauseId:causeId
        })
      } catch (error) {
        console.log("Error in adding cause", error)
      }

    }
}

export default PendingApprovalController;