const { HttpError } = require("../helpers");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const { SECRET_KEY } = process.env;
const User = require("../models/user")

const auteticate = async (req, res, next) => {
    const { autorization = ""} = req.headers;
    const [bearer, token] = autorization.split(" ");
    if (bearer !== "Bearer") {
        next(HttpError(401));
    }
    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if (!user) {
             next(HttpError(401));
        }
        req.user = user;
        next();
    }
    catch{
        next(HttpError(401));
    }
    
   
}

module.exports = auteticate;

// const authenticate = async (req, res, next) => {
//   const { authorization = "" } = req.headers;

//   const [bearer, token] = authorization.split(" ");

//   if (bearer !== "Bearer") {
//     next(HttpError(401));
//   }

//   try {
//     const { id } = jwt.verify(token, SECRET_KEY);
//     const user = await User.findById(id);
//     if (!user || !user.token || user.token !== token) {
//       next(HttpError(401));
//     }
//     req.user = user;

//     next();
//   } catch {
//     next(HttpError(401), "Not authorized");
//   }
// };

// module.exports = authenticate;