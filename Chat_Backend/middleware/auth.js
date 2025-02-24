const jwt = require("jsonwebtoken");
const config = require("./../config/app");

module.exports.auth = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) {
        return res.status(401).json({
            error: "Access denied! Unauthorized user",
        });
    }

    jwt.verify(token, config.appKey, (err, user) => {
        if(err) {
            return res.status(403).json({
                error: "Access denied! Invalid token",
            });
        }

        req.user = user;
        next();
    });
}