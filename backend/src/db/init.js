import CauseModel from "../model/cause/index.js";
import PendingApprovalModel from "../model/cause/pendingApprovalModel.js";
import DonationModel from "../model/donation/index.js";
import UserModel from "../model/user/index.js"

const dbInit = async () =>{
    await UserModel.sync({
        alter:true,
        force:false
    }),
    await CauseModel.sync({
        alter:true,
        force:false
    }),
    await DonationModel.sync({
        alter:true,
        force:false
    }),
    await PendingApprovalModel.sync({
        alter:true,
        force:false
    })
}

export default dbInit;