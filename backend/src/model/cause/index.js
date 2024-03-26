import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../../db/config.js";
import DonationModel from "../donation/index.js";

const CauseModel = sequelize.define('Cause',{

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
    raised_amount:{
        type: DataTypes.INTEGER,
    }
})

CauseModel.hasMany(DonationModel);  //Donation Table will have CauseId as a fk.
DonationModel.belongsTo(CauseModel);

export default CauseModel;