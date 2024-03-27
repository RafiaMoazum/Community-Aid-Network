import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; 

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/registration`, userData);
        //we are not using json() because axios automatially does this functionality . it parse json
        return response.data; 
    } catch (error) {
        const errorMessage = error.response && error.response.data.message
            ? error.response.data.message
            : 'Could not complete registration';
        throw new Error(errorMessage);
    }
};

export default registerUser
