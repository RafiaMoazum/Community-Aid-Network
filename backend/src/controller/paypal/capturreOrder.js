import axios from 'axios';
import generateAccessToken from './generateAccessToken.js';
import sequelize from '../../db/config.js';
import DonationModel from '../../model/donation/index.js';
import CauseModel from '../../model/cause/index.js';

const PAYPAL_API_BASE = 'https://api-m.sandbox.paypal.com';

const captureOrder = async (req, res) => {
    const { orderID } = req.params; // Extracting orderID from the request parameters
    console.log(orderID);
    const accessToken = await generateAccessToken(); // Authenticating with PayPal

    try {
        // Make the request to PayPal to capture the payment for the order
        const response = await axios.post(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderID}/capture`, {}, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });

        console.log("response has been received");
        // Check response for the captured payment details
        if (response.data.status === 'COMPLETED') {
            const transaction = await sequelize.transaction();

            try {
                // Extracting amount and other necessary data from response
                const amount = response.data.purchase_units[0].payments.captures[0].amount.value;
                const causeId = response.data.purchase_units[0].reference_id; // Assuming causeId is stored in reference_id

                console.log("amount " + amount)
                console.log("causeId " + causeId)

                // Update database with the donation details
                const donation = await DonationModel.create({
                    donation_amount: amount, 
                    CauseId: causeId, 
                }, { transaction });

                const cause = await CauseModel.findOne({ where: { id: causeId } });
                await cause.update({
                    raised_amount: sequelize.literal(`raised_amount + ${amount}`),
                }, { transaction });

                await transaction.commit();

                res.status(200).json({
                    message: 'Donation successfully captured and recorded',
                    donationDetails: donation,
                    details: response.data
                });
            } catch (error) {
                await transaction.rollback();
                console.error('Database error:', error);
                res.status(500).json({ error: 'Database transaction failed', details: error.toString() });
            }
        } else {
            // If the capture is not successful, handle it accordingly
            res.status(400).json({
                message: 'Failed to capture donation',
                details: response.data
            });
        }
    } catch (error) {
        console.error('Error capturing PayPal order:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to capture PayPal order for donation' });
    }
}

export default captureOrder;
