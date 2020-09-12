import jwt from "jsonwebtoken";
import config from "config";

const getToken = (payload) => {
  return jwt.sign(payload, config.get("jsonWebToken.signature"), {
    expiresIn: config.get("jsonWebToken.tokenExpiration"),
  });
};

const getUser = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.get("jsonWebToken.signature"), function (
      err,
      decoded
    ) {
      if (err) {
        err.statusCode = 401;
        throw err;
      }
      resolve(decoded);
    });
  });
};

export default { getToken, getUser };
