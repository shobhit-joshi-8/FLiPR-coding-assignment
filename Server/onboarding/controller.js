import onboarding from "../dao/onboarding.js";
import service from "./service.js";
import bcrypt from 'bcrypt';

export default {
    signUp: async (req, res) => {
        try {
            const data = req?.body;
            const userFetch = await onboarding.findOne({ email: data?.email }, {});
            if (userFetch) {
                return res.status(400).json({
                    success: false,
                    message: "Email already exist",
                    error: "Email already exist"
                });
            };
            const result = await service.signUp(data);
            if (!result) {
                return res.status(400).json({
                    success: false,
                    message: "Something went wrong",
                    error: "Please enter valid details"
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: "User Signup successfully",
                    return: null
                });
            };
        } catch (error) {
            console.log(error, 'error');
            return res.status().json({
                success: false,
                message: "Internal server error",
                return: error?.message
            });
        };
    },
    signIn: async (req, res) => {
        try {
            const data = req?.body;
            const userFetch = await onboarding.findOne({ email: data?.email }, {});
            if (!userFetch) {
                return res.status(404).json({
                    success: false,
                    message: "Invalid Credential",
                    error: "Invalid Credential"
                });
            };
            const passwordMatch = await bcrypt.compare(data?.password, userFetch?.password);

            if (!passwordMatch) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid Credentials",
                    error: "Invalid Credentials"
                });
            };
            const result = await service.signIn(data);
            if (!result) {
                return res.status(400).json({
                    success: false,
                    message: "Something Went wrong",
                    error: "Something went wrong during login"
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: "SignIn successfully",
                    result: { token: result }
                });
            };
        } catch (error) {
            console.log(error, 'error');
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error?.message
            });
        };
    },
    fetchAllUser: async (req, res) => {
        try {
            const data = {}
            const result = await service.fetchAllUser(data);
            if (!result.length) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                    error: "Users does not exist"
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: "User fetch successfully",
                    result: result
                });
            };
        } catch (error) {
            console.log(error, 'error');
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error?.message
            });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const data = {};
            data.user = req?.params?._id;
            const result = await service.deleteUser(data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                    error: "Users does not exist"
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: "User delete successfully",
                    result: null
                });
            };
        } catch (error) {
            console.log(error, 'error');
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error?.message
            });
        }
    },
    updateUser: async (req, res) => {
        try {
            const data = req?.body;
            data.userId = req?.params?._id;
            const result = await service.updateUser(data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                    error: "Users does not exist"
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: "User update successfully",
                    result: result
                });
            };
        } catch (error) {
            console.log(error, 'error');
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error?.message
            });
        };
    },
    viewUser: async (req, res) => {
        try {
            const data = {};
            data.user = req?.params?._id;
            const result = await service.viewUser(data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                    error: "Users does not exist"
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: "User fetch successfully",
                    result: result
                });
            };
        } catch (error) {
            console.log(error, 'error');
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error?.message
            });
        };
    },
    me: async (req, res) => {
        try {
            const data = {};
            data.user = req?.user?._id;
            const result = await service.me(data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                    error: "Users does not exist"
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: "User fetch successfully",
                    result: result
                });
            };
        } catch (error) {
            console.log(error, 'error');
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error?.message
            });
        };
    }
};