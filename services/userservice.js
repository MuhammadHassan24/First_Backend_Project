const UserModel = require("../models/user")
const jwt = require("jsonwebtoken");

class UserServices {
    static async registerUser(name, email, password) {
        try {
            const userCreate = new UserModel({ name, email, password });
            return await userCreate.save();
        } catch (error) {
            throw error;
        }
    }

    static async usercheck(email) {
        try {
            return await UserModel.findOne({ email });
        } catch (error) {
            throw error;
        }
    }

    static async generateToken(tokenData, secratkey, jwt_expire) {
        return jwt.sign(tokenData, secratkey, { expiresIn: jwt_expire });
    }

}
module.exports = UserServices;