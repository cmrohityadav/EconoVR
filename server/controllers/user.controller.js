import AppError from "../utils/error.util.js"
import User from "../models/user.model.js"
import cloudinary from "cloudinary"
import fs from "fs"
import sendEmail from "../utils/sendEmail.js"
import crypto from "crypto"
import otpEmail from "../utils/otpEmail.js"
const cookieOptions = {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
}
const register = async (req, res, next) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return next(new AppError("all field is required", 400))
    }

    const userExits = await User.findOne({ email });
    if (userExits) {
        return next(new AppError("User Exists", 400))
    }
    const userExits2 = await User.findOne({ username });
    if (userExits2) {
        return next(new AppError("Username Exists", 400))
    }

    const user = await User.create({
        username,
        email,
        password,
    })

    if (!user) {
        return next(new AppError("User registration fail, try again", 400))
    }


    await user.save();

    user.password = undefined;

    const token = await user.generateJwtToken();
    res.cookie("token", token, cookieOptions)
    return res.status(201).json({
        success: true,
        message: "User Registred Successfull",
        user,
    })
}



const login = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        return next(new AppError("All fields are required", 400))
    }

    try {
        const user = await User.findOne({ email }).select("+password")

        if (!user || ! await user.comparePassword(password)) {
            return next(new AppError("Password and email not right", 400))
        }

        const token = await user.generateJwtToken();
        user.password = undefined;

        res.cookie("token", token, cookieOptions)
        return res.status(201).json({
            success: true,
            message: "User logged Successfull",
            user,
        })

    } catch (error) {
        return next(new AppError(error.message, 500))
    }

}

const logout = async (req, res, next) => {




    try {
        return res
            .status(200)
            .clearCookie("token", null, {
                expires: new Date(),
                httpOnly: true,
            })
            .json({
                success: true,
                message: "logout"
            })
    } catch (error) {

        return next(new AppError(error.message, 400))
    }
}

const getProfile = async (req, res, next) => {
    const userId = req.user.id;

    if (!userId) {

        return next(new AppError("unAthorize Access please login or signup", 400))
    }

    const user = await User.findById(userId);

    if (!user) {
        return next(new AppError("unAthorize Access please login or signup", 400))
    }

    return res.status(200).json({
        success: true,
        user,
        message: "successfully gotted detail"
    })

}

const forgotPassword = async (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return next(new AppError("email is required", 400))
    }

    const user = await User.findOne({ email });
    if (!user) {
        return next(new AppError("email is not registrated", 400))
    }

    const resetToken = await user.generatePasswordResetToken();

    await user.save();

    const resetPasswordURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    const subject = 'Reset Password';
    const message = `You can reset your password by clicking <a href=${resetPasswordURL} target="_blank">Reset your password</a>\nIf the above link does not work for some reason then copy paste this link in new tab ${resetPasswordURL}.\n If you have not requested this, kindly ignore.`;

    try {
        await sendEmail(email, subject, message);

        res.status(200).json({
            success: true,
            message: `Reset password token has been sen to ${email}`,

        })
    } catch (error) {
        user.forgotPasswordExpiry = undefined
        user.forgotPasswordToken = undefined
        await user.save();
        return next(new AppError(error.message, 400))

    }

}
const resetPassword = async (req, res, next) => {

    const { resetToken } = req.params;
    const { password } = req.body;

    const forgotPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')


    const user = await User.findOne({
        forgotPasswordToken,
        forgotPasswordExpiry: { $gt: Date.now() }

    })

    if (!user) {
        return next(new AppError("token is invalid expired", 400))
    }

    user.password = password;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordExpiry = undefined
    user.save();
    res.status(200).json({
        success: true,
        message: 'Password changed succesfully'
    })

    
}

const changePassword=async(req,res,next)=>{
    const{ oldPassword , newPassword }=req.body
    console.log(oldPassword,newPassword)
    const {id}=req.user;

    if(!oldPassword || !newPassword){
        return next(
            new AppError("all fields are mantory",400)
        )
    }

    const user=await User.findById(id).select('+password');

    if(!user){
        return next(
            new AppError("User does not exists ",400)
        )
    }

    const isPasswordValid=await user.comparePassword(oldPassword)

    if(!isPasswordValid){
        return next(
            new AppError("new password and Old password not same",400)
        )
    }
    user.password=newPassword;
    await user.save();
    user.password=undefined;

    res.status(200).json({
        success:true,
        message:"password changed succesfully"
    })

}

const updateUser=async(req,res,next)=>{

    const {fullName}=req.body
    // console.log(req.body)
    // console.log(req.user)
    const {id}=req.user;
    // console.log(id)
    const user=await User.findById(id);
    if(!user){
        return next(new AppError("User does not exists",400))
    }

    if(req.body.fullName){
        user.fullName=fullName;
    }
    if(req.file){
        await cloudinary.v2.uploader.destroy(user.avatar.public_id)
        try {
            const result = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: "lms",
                width: 250,
                height: 250,
                gravity: 'faces',
                crop: 'fill'
            })

            if (result) {
                user.avatar.public_id = result.public_id;
                user.avatar.secure_url = result.secure_url;

                // remove from server
                fs.unlinkSync(`uploads/${req.file.filename}`)

            }

        } catch (error) {
            return next(
                new AppError(error || "file not uploaded, please try again ", 500)
            )
        }
        await user.save();
        res.status(200).json({
            success:true,
            message:"User details updated successfully"
        })

    }


}

const generateOtp=async(req,res,next)=>{
    try {
        const { email } = req.body;
      const otp = String(Math.floor(100000 + Math.random() * 900000).toString()); // Generate 6-digit OTP
    
        // Save OTP in the database
       const user= await User.findOneAndUpdate({ email }, { otp }, { upsert: true });
       if(!user){
        return next(
            new AppError("User does not exists ",400)
        )
       }
        await otpEmail(email," Verification Otp",otp)

       return res.status(200).json({ success: true, message: 'OTP sent successfully' });

    } catch (error) {
        return next(
            new AppError(error || "Otp lafda ", 500)
        )
    }
    
}

const verifyOtp=async(req,res,next)=>{
    const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email, otp });
    console.log(user)
    if (user) {
      res.json({ success: true, message: 'OTP verified successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ success: false, message: 'Failed to verify OTP' });
  }
}
export { register, login, logout, getProfile, forgotPassword, resetPassword ,changePassword,updateUser,generateOtp,verifyOtp}
