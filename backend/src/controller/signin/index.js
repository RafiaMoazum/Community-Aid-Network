import UserModel from '../../model/user/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const signInController = {
    authenticateUser: async (req, res) => {
        const {email, password} = req.body;

        try{
            const user = await UserModel.findOne({where: {email}})  // ---
            if(!user) {
                return res.status(404).json({message: 'User not found'})

            }
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) {
                return res.status(401).json({message: "Invalid Credentials"})
            }

            const token = jwt.sign(
                {
                    userId: user.id, email: user.email
                },'Community-Aid_Network345678909876543', {expiresIn: '1h'}
            )

            res.json({ message: 'Authentication successful', token })

        } catch(error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }


    }
}

export default signInController;
