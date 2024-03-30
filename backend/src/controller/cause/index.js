import CauseModel from "../../model/cause/index.js";
import PendingApprovalModel from "../../model/cause/pendingApprovalModel.js";
import nodemailer from "nodemailer"
import {google} from "googleapis"

// OAuth 2.0 credentials
const clientId = '583073772726-s9s8p8fr3h0kgd2fn6eoeq9n9rnfmfjl.apps.googleusercontent.com';
const clientSecret = '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';
const redirectUri = 'https://developers.google.com/oauthplayground';
const refresh_token = '1//04ZllecR0S7h4CgYIARAAGAQSNwF-L9Ir83owdTX7rlaNT87Khtg4KsBW33kL1ItrobFTJrHmbmXK4Tjvi_y1KqilpD7IPpw8cD0';

// Gmail API scopes
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

// Creating an OAuth2 client
const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
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
            });

            await pendingCause.destroy();

            // Sending email
            //const { to, sender } = req.body; 
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
                to:"rafiamoazum01@gmail.com",
                subject: 'About Cause Application on Community Aid Network Platform',
                text: `Your Cause is Approved! Now it will be displayed on our site for people to see and support🤞`,
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
    const data= await CauseModel.findAll();
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