import CauseModel from "../../model/cause/index.js";


const CauseController ={

addCause: async (req,res) =>{

    try {
        const data = await CauseModel.create({
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