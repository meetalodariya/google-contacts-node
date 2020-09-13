import jwt from "../utils/json-web-token";
import config from "config";

export default async (req, res, next) => {
  try {
    const header = req.get("Authorization");
    if (!header) {
      const error: any = new Error("Authentication Failed");
      error.statusCode = 401;
      throw error;
    }
    const token = header.replace("Bearer ", "");
    if (!token) {
      const error: any = new Error("Authentication Failed");
      error.statusCode = 401;
      throw error;
    }
    const decodeToken: any = await jwt.getUser(token);
    if (!decodeToken) {
      const error: any = new Error("Authentication Failed");
      error.statusCode = 401;
      throw error;
    }
    req.user = decodeToken;
    next();
  } catch (err) {
    next(err);
  }
};
