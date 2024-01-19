const UserServices = require("../services/userservice")

exports.register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const successRes = await UserServices.registerUser(name, email, password);
        res.json({ status: true, success: "user craete successful" });
    } catch (error) {
        throw error;
    }
}