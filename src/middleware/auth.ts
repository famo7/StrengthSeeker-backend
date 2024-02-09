import jwt from "jsonwebtoken";

export default function (req, res, next) {
    let token = "";
    // get authorization header
    const authorization = req.get("authorization");

    // extract the token after bearer
    if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
        token = authorization.substring(7);
    }
    // check if token does not exists, send error message if not
    if (!token) {
        return res.status(401).send("Access denied. No token provided");
    }

    // try to verify the token using the tokenSecret
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        // store the decoded token in req.user
        req.user = decoded;
        // call next for the next middleware
        next();
        // catch error
    } catch (ex) {
        // send error message
        res.status(400).send("Invalid Token");
    }
    return null;
};