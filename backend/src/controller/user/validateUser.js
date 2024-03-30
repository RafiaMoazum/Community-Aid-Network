import UserModel from "../../model/user/index.js";

const userData = async (req, res) => {
    try {
        const user = await UserModel.findOne({
            where: {
                email: req.user.email 
            }
        });
console.log(user)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.json({ name: user.Name, email: user.email, isValid: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default userData;
