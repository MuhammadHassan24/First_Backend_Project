const UserModel = require("../models/user")


class UserServices {
   static async registerUser(name, email, password) {
        try {
            const userCreate = new UserModel({ name, email, password });
            return await userCreate.save();
        } catch (error) {
            throw error;
        }
    }

}
module.exports = UserServices;