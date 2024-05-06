import Joi from 'joi';
import mongoose from 'mongoose';

const isValidObjectId = (req, res, next) => {
    const _id = req?.params?._id;
    const validId = mongoose.Types.ObjectId.isValid(_id);
    if (!validId)
        return res.status(400).json({
            success: false,
            message: "Please enter a valid objectId",
            error: "Invalid objectId"
        });
    next();
};

const signUpValidator = (req, res, next) => {
    const signUpValidate = Joi.object({
        firstName: Joi.string().empty().min(2).trim(),
        lastName: Joi.string().empty().min(2).trim(),
        email: Joi.string().empty().min(5).trim().email().required(),
        password: Joi.string().empty().min(7).required(), // Minimum 7 characters for the password
    }).options({ allowUnknown: true });
    const error = signUpValidate.validate(req.body);
    if (error.error)
        return res.status(400).json({
            success: false,
            message: "Invalid/ Missing credentials",
            error: error.error.details[0].message.toString()
        });
    next();
};

const signInValidator = (req, res, next) => {
    const signInValidate = Joi.object({
        email: Joi.string().empty().max(100).trim().email().required(),
        password: Joi.string().empty().max(100).required(), // Minimum 7 characters for the password
    }).options({ allowUnknown: true });
    const error = signInValidate.validate(req.body);
    if (error.error)
        return res.status(400).json({
            success: false,
            message: "Invalid/ Missing credentials",
            error: error.error.details[0].message.toString()
        });
    next();
};

export {
    signUpValidator,
    signInValidator,
    isValidObjectId
};