const express = require("express");
const router = express.Router();
const { verifyMobile, verifyOtp, recharge, withDrawAmount, deductUserAmount,
    getAllUserMasters, getuserMasterById, addUserAmount,paymentToAdmin, getUser,changeGameVersion } = require("../controller/userMaster.controller");

router.use(express.json());

router.post('/verifyMobile', verifyMobile);
router.post('/verifyOtp', verifyOtp);
router.post('/recharge', recharge);
router.post('/withDrawAmount', withDrawAmount );
router.post('/paymentToAdmin', paymentToAdmin );
router.post('/getUser', getUser );
router.post("/deductUserAmount",deductUserAmount)
router.post("/addUserAmount",addUserAmount)
router.get("/getAllUserMasters",getAllUserMasters)
router.post('/changeGameVersion', changeGameVersion);
router.get('/getuserMasterById/:userId', getuserMasterById);

module.exports = router;
