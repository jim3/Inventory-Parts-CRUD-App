import express from "express";
const router = express.Router();
import accountsController from "../controllers/accountsController.js";
import verifyToken from "../middlewares/verifyToken.js";

router.post("/api/accounts", accountsController.createAccount); // create an account
router.get("/api/accounts", accountsController.getAccounts); // get all accounts
router.post("/api/accounts/login", accountsController.login); // login
router.get("/api/accounts/protected", verifyToken, accountsController.protectedLogin);

export default router;
