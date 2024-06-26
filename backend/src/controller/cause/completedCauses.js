import CauseModel from "../../model/cause/index.js";
import CompletedCausesModel from "../../model/cause/completedCauses.js";
import UserModel from "../../model/user/index.js";
import nodemailer from "nodemailer"
import {google} from "googleapis"
import 'dotenv/config'


// Gmail API scopes
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

// Creating an OAuth2 client
const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET,process.env.REDIRECT_URI);

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