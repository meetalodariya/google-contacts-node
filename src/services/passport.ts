import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import config from "config";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

passport.use(
  "google",
  new GoogleStrategy(
    {
      callbackURL: config.get("oauthCallback"),
      clientID: config.get("google.clientId"),
      clientSecret: config.get("google.clientSecret"),
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      if (profile) {
        return done(null, profile);
      }
      done(null, profile);
    }
  )
);
