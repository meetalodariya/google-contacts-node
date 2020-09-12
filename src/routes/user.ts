import { Router } from "express";
import passport from "passport";
import { googleOauthCallbackController } from "../controllers/google-oath-callback-controller";
import config from "config";

const router = Router();

router.get(
  "/user/auth",
  passport.authenticate("google", {
    scope: config.get("google.scopes").join(" "),
  })
);

router.get("/auth/google/callback", googleOauthCallbackController);

export default router;
