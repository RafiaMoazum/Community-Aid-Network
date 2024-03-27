import UserModel from '../../model/user/index.js';
import bcrypt from 'bcrypt';

const registrationController = {
    addDetails: async (req, res) => {
        try {
            const { name, contactNo, cnic, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 12);

            const user = await UserModel.create({
                Name: name,
                contactNo,
                cnic,
                email,
                password: hashedPassword,
            });

            const responseData = {
                id: user.id, 
                name: user.Name,
                contactNo: user.contactNo,
                cnic: user.cnic,
                email: user.email,
            };

            res.status(201).json({
                message: 'Your details have been stored in the database.',
                user: responseData,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error registering user',
                error: error.message,
            });
        }
    },
};

export default registrationController;
