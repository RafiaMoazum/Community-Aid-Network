
import axios from "axios";

const BASE_URL = 'http://localhost:3000'; 

const validateUser = async (token) => {
    try {
        const response = await axios.post(`${BASE_URL}/user`, {}, {
            headers: {
                authentication: `Bearer ${token}`,
            },
        });
        console.log(response.data)
        return response.data;
    } catch (error) {

        console.log("User is not Signed In, Sign in to access this page")
        const errorMessage = error.response && error.response.data.message ?
            error.response.data.message : "Could Not Authenticate User";

        throw new Error(errorMessage);
    }
};


export default validateUser;

