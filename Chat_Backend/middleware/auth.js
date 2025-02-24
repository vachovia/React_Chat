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

    jwt.verify(token, config.appKey, (error, user) => {
        if (error) {
          const message = "Access denied! Invalid token.";
          return res.status(403).json({
            error, message
          });
        }

        req.user = user;
        next();
    });
}