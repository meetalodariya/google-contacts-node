import config from "config";
import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  config.get("google.clientId"),
  config.get("google.clientSecret"),
  config.get("oauthCallback")
);

const getAuthenticatedClient = async (code: string) => {
  const tokens = { access_token: code };
  oauth2Client.setCredentials(tokens);
  return oauth2Client;
};

export { oauth2Client, getAuthenticatedClient };
