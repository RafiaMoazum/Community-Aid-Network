
import PendingApprovalModel from "../../model/cause/pendingApprovalModel.js";

const PendingApprovalController ={

    
    addCause: async (req,res) => {

        try {
            const data = await PendingApprovalModel.create({
                title:req.body.title,
                category:req.body.category,
                details:req.body.details,
                goal_amount:req.body.goal_amount,
                image: req.file.path,
            })
    
            res.json({
                message:"Cause Added",
                data
            })
        } catch (error) {
            console.log("Error in adding cause", error)
        }
    },

    getAllPendingCauses:async (req,res) => {
        const data= await PendingApprovalModel.findAll();
        res.json({
            data,
          });
    },
    
}

export default PendingApprovalController;