import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../../db/config.js";


const CompletedCausesModel = sequelize.define('CompletedCause',{

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

export default CompletedCausesModel;