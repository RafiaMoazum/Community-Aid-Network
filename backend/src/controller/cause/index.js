import CauseModel from "../../model/cause/index.js";


const CauseController ={

addCause: async (req,res) =>{

    try {
        const data = await CauseModel.create({
            title:req.body.title,
            category:req.body.category,
            details:req.body.details,
            goal_amount:req.body.goal_amount

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
}

}

export default CauseController;