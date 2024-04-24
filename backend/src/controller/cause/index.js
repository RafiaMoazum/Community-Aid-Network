import CauseModel from "../../model/cause/index.js";
import PendingApprovalModel from "../../model/cause/pendingApprovalModel.js";
import nodemailer from "nodemailer"
import {google} from "googleapis"
import UserModel from "../../model/user/index.js";
import 'dotenv/config'


// OAuth 2.0 credentials
// const clientId = '583073772726-s9s8p8fr3h0kgd2fn6eoeq9n9rnfmfjl.apps.googleusercontent.com';
// const clientSecret = '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';
// const redirectUri = 'https://developers.google.com/oauthplayground';
// const refresh_token = '1//04oXBrH7WMeHtCgYIARAAGAQSNwF-L9IrRt7nTncy1PScsoxp2ue2w87OouDDaY2cKuy4C_XhYl_8Et9GaIK1TqIiSHRs_O-LST8';

// Gmail API scopes
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

// Creating an OAuth2 client
const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET,process.env.REDIRECT_URI);
const CauseController ={

    acceptCause: async (req, res) => {
        try {
            const pendingCause = await PendingApprovalModel.findByPk(req.params.id);
            if (!pendingCause) {
                return res.status(404).json({ error: "Pending cause not found" });
            }

            const cause = await CauseModel.create({
                title: pendingCause.title,
                category: pendingCause.category,
                details: pendingCause.details,
                goal_amount: pendingCause.goal_amount,
                image: pendingCause.image,
                UserId:pendingCause.UserId
            });

            await pendingCause.destroy();

            const user = await UserModel.findByPk(pendingCause.UserId);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: process.env.GMAIL_SENDER,
                    clientId: process.env.CLIENT_ID,
                    clientSecret: process.env.CLIENT_SECRET,
                    refreshToken: process.env.REFRESH_TOKEN,
                    accessToken: oAuth2Client.credentials.access_token,
                },
            });

            const mailOptions = {
                from: `"Community Aid Network" <${process.env.GMAIL_SENDER}>`, 
                to:user.email,
                subject: 'Your Donation Request Approved - Your Cause Will be Featured on Our Website',
                text: `Dear ${user.Name},
                We hope this email finds you well. We are pleased to inform you that your donation request 
                has been approved by our team after careful verification and consideration. 
                Your cause has been deemed eligible for featuring on our website, where individuals can view
                and contribute towards fulfilling your needs or those of someone you care about.
                Once again, congratulations on having your cause approved, and thank you for allowing us to be a part of your journey towards positive change.
                If you have any questions or need further assistance, please do not hesitate to reach out to us.

                Warm regards,
                Community Aid Network
                Email:communityAidNetwork@gmail.com
                Contact No. 032089090`,
            };

            const result = await transporter.sendMail(mailOptions);
            console.log('Email sent:', result);

            res.json({ message: 'Cause accepted and moved to Causes table', cause });
        } catch (error) {
            console.error('Error accepting cause:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

getAllCauses: async (req,res) =>{
    const data= await CauseModel.findAll({
        include:[UserModel]
    });
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
},


};



export default CauseController;