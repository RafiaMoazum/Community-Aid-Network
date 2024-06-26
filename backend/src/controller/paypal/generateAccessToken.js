import 'dotenv/config'
import axios from 'axios';


const base = "https://api-m.sandbox.paypal.com";

const generateAccessToken = async () => {
    const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString("base64");
    try {
        const response = await axios.post(`${base}/v1/oauth2/token`, 'grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        // Directly return the access token from the response data
        return response.data.access_token;
    } catch (error) {
        // Log the error or throw an exception
        console.error('Error generating PayPal access token:', error.response ? error.response.data : error.message);
        throw new Error('Failed to generate PayPal access token');
    }
}

// Removed handleResponse as it's not necessary with Axios

export default generateAccessToken;
