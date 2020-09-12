import { Router } from "express";
import isAuth from "../middlewares/is-authenticated";
import config from "config";
import { getContacts } from "../controllers/get-contacts-controller";

const router = Router();

router.get("/contacts/all", isAuth, getContacts);

export default router;
