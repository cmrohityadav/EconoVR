import { Router } from "express";
import { changePassword, forgotPassword, generateOtp, getProfile, login, logout, register, resetPassword, updateUser, verifyOtp } from "../controllers/user.controller.js";
import { isLogged } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router=Router();


router.route("/register").post(register)
router.route("/login").post(login)
router.route("/generateotp").post(generateOtp)
router.route("/verifyotp").post(verifyOtp)
// console.log("hello")
router.route("/logout").get(logout)
router.route('/reset').post(forgotPassword)
router.route('/reset/:resetToken').post(resetPassword)

// secured routes
router.route("/me").post(isLogged,getProfile)
router.route("/changePassword").post(isLogged,changePassword)
router.route("/update").put(isLogged,upload.single("avatar"),updateUser)


export default router