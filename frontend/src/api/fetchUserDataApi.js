/*
import axios from "axios";


const BASE_URL = 'http://localhost:3000'; 

const validateUser = async (token) => {
    try{
        const response = await axios.post(`${BASE_URL}/user`, token)
        return response;
    }catch(error){
        const errorMessage = error.response && error.response.data.message?
        error.response.data.message : "Could Not Authenticate User"

        throw new Error(errorMessage)
    }
}

export default validateUser;

*/