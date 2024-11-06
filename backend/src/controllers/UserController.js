const UserService = require("../services/UserService");

const createUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phone } = req.body;
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isCheckEmail = reg.test(email);
        if (!email || !password || !confirmPassword) {
            return res.status(400).json({
                status: "ERR",
                message: "The input is required",
            });
        } else if (!isCheckEmail) {
            return res.status(400).json({
                status: "ERR",
                message: "The input is email",
            });
        } else if (password !== confirmPassword) {
            return res.status(400).json({
                status: "ERR",
                message: "The password is not equal to confirmPassword",
            });
        }
        const response = await UserService.createUser(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            status: "ERR",
            message: e.message || "Internal Server Error",
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isCheckEmail = reg.test(email);
        if (!email || !password) {
            return res.status(400).json({
                status: "ERR",
                message: "The input is required",
            });
        } else if (!isCheckEmail) {
            return res.status(400).json({
                status: "ERR",
                message: "The input is email",
            });
        }
        const response = await UserService.loginUser(req.body);
        const { refresh_token, ...newResponse } = response;
        res.cookie("refresh_token", refresh_token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            path: "/",
        });
        return res.status(200).json({ ...newResponse, refresh_token });
    } catch (e) {
        return res.status(500).json({
            status: "ERR",
            message: e.message || "Internal Server Error",
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = req.body;
        if (!userId) {
            return res.status(400).json({
                status: "ERR",
                message: "The userId is required",
            });
        }
        const response = await UserService.updateUser(userId, data);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            status: "ERR",
            message: e.message || "Internal Server Error",
        });
    }
};

const getDetailsUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            return res.status(400).json({
                status: "ERR",
                message: "The userId is required",
            });
        }
        const response = await UserService.getDetailsUser(userId);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            message: e.message || "Internal Server Error",
        });
    }
};

module.exports = {
    createUser,
    loginUser,
    updateUser,
    getDetailsUser,
};
