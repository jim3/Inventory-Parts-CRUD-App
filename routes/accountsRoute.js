import express from "express";
const router = express.Router();
import accountsController from "../controllers/accountsController.js";
import verifyToken from "../middlewares/verifyToken.js"; // import the middleware function

router.post("/api/accounts", accountsController.createAccount);
router.get("/api/accounts", accountsController.getAccounts);
router.post("/api/accounts/login", accountsController.login);

// call the middleware function, `verifyToken`, before the controller function is called
router.get("/api/accounts/protected", verifyToken, accountsController.protectedLogin);

export default router;
