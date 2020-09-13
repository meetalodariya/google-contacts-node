import { oauth2Client } from "../../utils/oauth2";
import jwt from "../../utils/json-web-token";
import { getUserProfile } from "../../clients/googleClients";
import url from "url";
import config from "config";

const googleOauthCallbackController = async (req, res, next) => {
  try {
    const { tokens } = await oauth2Client.getToken(req.query.code);
    const accessToken = tokens.access_token;
    const userProfile = await getUserProfile(accessToken);
    const jsonWebtoken = jwt.getToken({
      token: accessToken,
    });

    return res.redirect(
      url.format({
        pathname: config.get("clientHost") + "/login",
        query: {
          name: userProfile.name,
          email: userProfile.email,
          profile: userProfile.picture,
          token: jsonWebtoken,
        },
      })
    );
  } catch (err) {
    next(err);
  }
};

export { googleOauthCallbackController };
