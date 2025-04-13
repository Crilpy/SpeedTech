import express from 'express';
import { loginUser,registerUser,adminLogin,getUserProfile, updateUserProfile, checkEmailExists,resetPassword } from '../controllers/userController.js';
import authUser from '../middleware/auth.js';

const userRouter = express.Router();

// 🔐 Authentication Routes
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

// 👤 Profile Routes
userRouter.get('/me', authUser, getUserProfile);
userRouter.put('/me', authUser, updateUserProfile);

// 🔁 Forgot Password Flow (Simple)
userRouter.post('/check-email', checkEmailExists);
userRouter.post('/reset-password', resetPassword);

export default userRouter;