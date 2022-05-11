const express=require("express")
const admin=require("../controllers/admin")

const router = express.Router();

router.post("/admin/register", admin.createAdmin);
router.post("/admin/login", admin.loginAdmin);




module.exports =router;