import CauseModel from "../../model/cause/index.js";
import PendingApprovalModel from "../../model/cause/pendingApprovalModel.js";


const CauseController ={

acceptCause:async (req,res) =>{

    try {
        const pendingCause = await PendingApprovalModel.findByPk(req.params.id);
        if(!pendingCause){
            return res.status(404).json({error:"Pending cause not found"});
        }
        
        const cause = await CauseModel.create({
            title: pendingCause.title,
            category: pendingCause.category,
             details: pendingCause.details,
            goal_amount: pendingCause.goal_amount,
            image: pendingCause.image,
        });

        await pendingCause.destroy();
        res.json({ message: 'Cause accepted and moved to Causes table', cause });

    } catch (error) {
        console.error('Error accepting cause:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
},
getAllCauses: async (req,res) =>{
    const data= await CauseModel.findAll();
    res.json({
        data,
      });
},

getSpecificCauseDetails: async (req, res) => {
    const id  = req.params.id; 
    try {
        const cause = await CauseModel.findByPk(id); 
        if (!cause) {
            return res.status(404).json({ message: "Cause not found" });
        }
        res.json(cause); 
    } catch (error) {
        console.log("Error in getting cause details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

}

export default CauseController;