import CauseModel from "../../model/cause/index.js";
import CompletedCausesModel from "../../model/cause/completedCauses.js";
import UserModel from "../../model/user/index.js";
import nodemailer from "nodemailer"
import {google} from "googleapis"


// OAuth 2.0 credentials
const clientId = '583073772726-s9s8p8fr3h0kgd2fn6eoeq9n9rnfmfjl.apps.googleusercontent.com';
const clientSecret = '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';
const redirectUri = 'https://developers.google.com/oauthplayground';
const refresh_token = '1//04oXBrH7WMeHtCgYIARAAGAQSNwF-L9IrRt7nTncy1PScsoxp2ue2w87OouDDaY2cKuy4C_XhYl_8Et9GaIK1TqIiSHRs_O-LST8';

// Gmail API scopes
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

// Creating an OAuth2 client
const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

const CompletedCauseController = {
    completedCause: async (req, res) => {
        try {
            console.log("Received request for completed cause with ID:", req.params.id);
            const cause = await CauseModel.findByPk(req.params.id);
            if (!cause) {
                return res.status(404).json({ error: "Cause not found" });
            }

            const completedCause = await CompletedCausesModel.create({
                title: cause.title,
                category: cause.category,
                details: cause.details,
                goal_amount: cause.goal_amount,
                raised_amount:cause.raised_amount,
                UserId:cause.UserId
            });


            const user = await UserModel.findByPk(cause.UserId);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: 'rafiamoazum@gmail.com',
                    clientId: clientId,
                    clientSecret: clientSecret,
                    refreshToken: refresh_token,
                    accessToken: oAuth2Client.credentials.access_token,
                },
            });

            const mailOptions = {
                from: '"Community Aid Network" <rafiamoazum@gmail.com>', 
                to:user.email,
                subject: ' Congratulations! Your Cause Has Reached Its Goal 🎉 ',
                text: `Dear ${user.Name},
                We are thrilled to inform you that your cause, "${cause.title}" has been a tremendous success! Thanks to your efforts and the generosity of our donors, we have reached the fundraising goal you set.
                The total amount required for your cause, ${cause.goal_amount}, has been successfully collected.
                Rest assured that the collected funds will be processed promptly and sent to you soon. Once the funds have been transferred, we will notify you again with the details.
                Once again, congratulations on this remarkable success!
                If you have any questions or need further assistance, please don't hesitate to contact us.

                Thank you for being a part of our community and for your invaluable contributions.

                Warm regards,
                Community Aid Network
                Email:communityAidNetwork@gmail.com
                Contact No. 032089090`,
            };
            await cause.destroy();

            const result = await transporter.sendMail(mailOptions);
            console.log('Email sent:', result);

            res.json({ message: 'Cause accepted and moved to Causes table', cause });
        } catch (error) {
            console.error('Error accepting cause:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getAllCompletedCauses: async (req,res) =>{
        const data= await CompletedCausesModel.findAll({
            include:[UserModel]
        });
        res.json({
            data,
          });
    },
    

}

export default CompletedCauseController;