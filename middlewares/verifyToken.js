import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Middleware to verify routes that require a token to access
const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    console.log(authHeader.split(" ")[1]); // splits the token from the header
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).send("Access Denied");

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send("Invalid Token");
    }
};

export default verifyToken;
