const { Router } = require("express");

const authController = require("../controllers/authController");
const authRouter = Router();

authRouter.get("/logUserIn", authController.logUserIn);
authRouter.post("/login", authController.login);
authRouter.get("/logout", authController.logout);

authRouter.post("/forgotPassword", authController.forgotPassword);
authRouter.post("/resetPassword/:resetToken", authController.resetPassword);

authRouter.patch(
  "/updatePassword",
  authController.protect,
  authController.updatePassword
);

module.exports = authRouter;
