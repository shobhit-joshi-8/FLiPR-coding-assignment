import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    email: { type: String, lowercase: true, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    password: { type: String, required: true },
}, { timestamps: true });

const user = mongoose.model('users', userSchema);

export default user;