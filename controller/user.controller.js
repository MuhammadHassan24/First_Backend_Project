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
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserServices.usercheck(email);
        if (!user) {
            throw new Error("User Is Not Exist");
        }
        const isMatch = await user.comparePassword(password);
        if (isMatch === false) {
            throw new Error("Invalid Password");
        }

        let tokenData = { _id: user._id, email: user.email };
        const token = await UserServices.generateToken(tokenData, "secratkey");
        res.status(200).json({ status: true, token: token })

    } catch (error) {
        throw error;
    }
}