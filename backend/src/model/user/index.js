import {DataTypes} from 'sequelize';
import sequelize from '../../db/config.js';
import CauseModel from '../cause/index.js';
import DonationModel from '../donation/index.js';
import PendingApprovalModel from '../cause/pendingApprovalModel.js';

const UserModel = sequelize.define('User', {
    
    Name: {
      type: DataTypes.STRING,
      required:true,
    },
    contactNo:{
        type: DataTypes.STRING,
    },
    cnic:{
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique:true
    },
    password:{
        type:DataTypes.STRING
    }, 
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user'
    },
  }, {
    paranoid:true
  });

  UserModel.hasMany(PendingApprovalModel);  //Pending Approval will have UserId as a fk
  PendingApprovalModel.belongsTo(UserModel)


  UserModel.hasMany(CauseModel);  //Cause Table will have UserId as a fk.
  CauseModel.belongsTo(UserModel);


  UserModel.hasMany(DonationModel);  //Donation Table will have UserId as a fk.
  DonationModel.belongsTo(UserModel);


  export default UserModel;