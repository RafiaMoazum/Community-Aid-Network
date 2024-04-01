import jwt from 'jsonwebtoken';

const UserIdentification = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    if (token == null) {
        return res.sendStatus(401);
        console.log("token is not received from frontend at userIdentification middleware")
    }

    try {
        const decoded = jwt.verify(token, "Community-Aid_Network345678909876543");
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};

export default UserIdentification;
