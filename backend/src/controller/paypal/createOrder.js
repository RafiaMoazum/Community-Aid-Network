import axios from 'axios';
import  generateAccessToken  from './generateAccessToken.js';

const PAYPAL_API_BASE = 'https://api-m.sandbox.paypal.com';

const createOrder = async (req, res) => {
    try {
        console.log("Hello backend")
        console.log(req.body)
        const accessToken = await generateAccessToken();

        // Assuming `caseId` and `donationAmount` are passed in the request body
        const { caseId, donationAmount } = req.body;

        // Construct the order payload focusing on the donation scenario
        const orderPayload = {
            intent: 'CAPTURE',
            purchase_units: [{
                reference_id: `${caseId}`,  // Include this to ensure it can be retrieved later
                description: `Donation for Case ID: ${caseId}`,
                amount: {
                    currency_code: 'USD',
                    value: donationAmount.toString(),
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: donationAmount.toString(),
                        },
                    },
                },
            }],
            application_context: {
                brand_name: "Community Aid Network",
                user_action: "PAY_NOW",
                return_url: "https://example.com/return",
                cancel_url: "https://example.com/cancel"
            }
        };

        // Make the request to PayPal to create the order
        const response = await axios.post(`${PAYPAL_API_BASE}/v2/checkout/orders`, orderPayload, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });

        // Respond with the created order ID
        res.status(201).json({ id: response.data.id });
    } catch (error) {
        console.error('Error creating PayPal order for donation:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to create PayPal order for donation' });
    }
}

export default createOrder;
