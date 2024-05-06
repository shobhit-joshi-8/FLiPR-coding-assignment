import bcrypt from 'bcrypt';
import onboarding from '../dao/onboarding.js';
import jwt from 'jsonwebtoken';

export default {
    signUp: async (data) => {
        try {
            data.password = await bcrypt.hash(data?.password, 10);
            const result = await onboarding.createOne(data);
            return result;
        } catch (error) {
            return error;
        };
    },
    signIn: async (data) => {
        try {
            const result = await onboarding.findOne({ email: data?.email }, {});
            if (!result) {
                return result;
            } else {
                const token = jwt.sign({ _id: result?._id, role: result?.role }, process.env.JWTCODE)
                return token;
            };
        } catch (error) {
            return error;
        };
    },
    fetchAllUser: async (data) => {
        try {
            const result = await onboarding.fetchAll({ role: 'user' });
            return result;
        } catch (error) {
            return error;
        };
    },
    deleteUser: async (data) => {
        try {
            const result = await onboarding.deleteOne({ _id: data?.user });
            return result;
        } catch (error) {
            return error;
        };
    },
    updateUser: async (data) => {
        try {
            if (data?.password) {
                data.password = await bcrypt.hash(data?.password, 10);
            };
            const result = await onboarding.updateOne({ _id: data?.userId }, data);
            return result;
        } catch (error) {
            return error;
        };
    },
    viewUser: async (data) => {
        try {
            const projection = { password: 0 }
            const result = await onboarding.findOne({ _id: data?.user }, projection);
            return result;
        } catch (error) {
            return error;
        };
    },
    me: async (data) => {
        try {
            const projection = { password: 0 }
            const result = await onboarding.findOne({ _id: data?.user }, projection);
            return result;
        } catch (error) {
            return error;
        };
    }
};