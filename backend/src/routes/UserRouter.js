const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const {
    authMiddleWare,
    authUserMiddleWare,
} = require("../middleware/authMiddleware");

router.post("/sign-up", userController.createUser);
router.post("/sign-in", userController.loginUser);
router.put("/update/:id", authUserMiddleWare, userController.updateUser);
router.get(
    "/get-details/:id",
    authUserMiddleWare,
    userController.getDetailsUser
);
router.post("/refresh-token", userController.refreshToken);
router.post("/log-out", userController.logoutUser);
router.get("/get-all", authMiddleWare, userController.getAllUser);
router.delete("/delete-user/:id", authMiddleWare, userController.deleteUser);
router.post("/delete-many", authMiddleWare, userController.deleteMany);

module.exports = router;
