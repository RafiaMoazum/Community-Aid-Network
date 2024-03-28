import CauseModel from "../../model/cause/index.js";
import PendingApprovalModel from "../../model/cause/pendingApprovalModel.js";


const CauseController ={

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