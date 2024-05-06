import express from "express";
import onboardController from './onboarding/controller.js';
import { isValidObjectId, signInValidator, signUpValidator } from "./middleware/onBoardingValidations.js";
import { adminVerification, tokenVerification } from "./middleware/auth.js";

const router = express.Router();

router.post('/auth/sign-up', signUpValidator, onboardController.signUp);
router.post('/auth/sign-in', signInValidator, onboardController.signIn);
router.get('/auth/fetch-all-user', tokenVerification, adminVerification, onboardController.fetchAllUser);
router.delete('/auth/delete/user/:_id', tokenVerification, adminVerification, isValidObjectId, onboardController.deleteUser);
router.patch('/auth/update/user/:_id', tokenVerification, adminVerification, isValidObjectId, onboardController.updateUser);
router.get('/auth/view/user/:_id', tokenVerification, adminVerification, isValidObjectId, onboardController.viewUser);
router.get('/auth/me', tokenVerification, onboardController.me);

export default router;