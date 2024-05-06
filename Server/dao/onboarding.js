import user from "../model/userModel.js";

export default {
    createOne: async (obj) => {
        try {
            const result = await user(obj).save();
            return result;
        } catch (error) {
            return error;
        };
    },
    findOne: async (filter, projection) => {
        try {
            const result = await user.findOne(filter, projection);
            return result;
        } catch (error) {
            return error;
        };
    },
    fetchAll: async (filter) => {
        try {
            const result = await user.find(filter, { password: 0 }).sort({ createdAt: -1 })
            return result;
        } catch (error) {
            return error;
        };
    },
    updateOne: async (filter, obj) => {
        try {
            const result = await user.findOneAndUpdate(filter, { $set: obj }, { new: true, projection: { password: 0 } });
            return result;
        } catch (error) {
            return error;
        };
    },
    deleteOne: async (filter) => {
        try {
            const result = await user.findOneAndDelete(filter);
            return result;
        } catch (error) {
            return error;
        };
    },

};