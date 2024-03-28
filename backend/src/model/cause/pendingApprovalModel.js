import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../../db/config.js";
import DonationModel from "../donation/index.js";

const PendingApprovalModel = sequelize.define('PendingApproval',{

    title:{
        type:DataTypes.STRING,
    },
    category:{
        type:DataTypes.STRING,
    },
    details:{
        type:DataTypes.STRING,
    },
    goal_amount:{
        type:DataTypes.INTEGER,
    }, 
    image: {
        type: DataTypes.STRING, 
      },
    raised_amount:{
        type: DataTypes.INTEGER,
    }
})



export default PendingApprovalModel;