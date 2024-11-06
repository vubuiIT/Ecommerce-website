const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const {
    authMiddleWare,
    authUserMiddleWare,
} = require("../middleware/authMiddleware");

router.post("/sign-up", userController.createUser);
router.post("/sign-in", userController.loginUser);
router.put("/update-user/:id", authUserMiddleWare, userController.updateUser);
router.get(
    "/get-details/:id",
    authUserMiddleWare,
    userController.getDetailsUser
);

module.exports = router;
