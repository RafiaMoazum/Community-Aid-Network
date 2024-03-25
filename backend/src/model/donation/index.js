import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const DonationModel= sequelize.define("Donation",{
    donation_amount:{
        type: DataTypes.STRING,
    }
})

export default DonationModel;