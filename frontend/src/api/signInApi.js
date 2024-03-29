import axios from "axios";

const BASE_URL = 'http://localhost:3000'; 

const signInUser = async (userData) => {
   try{const response = await axios.post(`${BASE_URL}/signin`, userData)
   return response.data; 
    } catch (error) {
        const errorMessage = error.response && error.response.data.message
            ? error.response.data.message
            : 'Could not Signin';
        throw new Error(errorMessage);
    }
}

export default signInUser