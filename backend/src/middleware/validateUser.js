import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    console.log(req.headers.authentication)
    const token = req.headers.authentication?.split(' ')[1];
    console.log("this is token" , token)
    if (!token) {
        return res.status(403).json({ message: "A token is required for authentication" , token});
    }

    try {
        const decoded = jwt.verify(token, "Community-Aid_Network345678909876543");
        req.user = decoded;
        console.log("req.user========",req.user)
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};

export default verifyToken;