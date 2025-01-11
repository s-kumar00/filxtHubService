const router = require("express").Router();
const userController = require("../controllers/user.control")
const verifyToken = require("../Middleware/verifyToken");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

router.get("/test",verifyToken, userController.test);
router.delete('/delete/:id', verifyToken, userController.deleteUser);
router.put('/update/:userId', verifyToken, upload.single('image'), userController.updateUser);
router.put('/updatePassword/:id',verifyToken, userController.updatePassword);

module.exports = router;


