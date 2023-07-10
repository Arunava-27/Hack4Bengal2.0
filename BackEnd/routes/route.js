const router = require('express').Router();
const { RegisterUser, LoginUser, verifyToken,Profile } = require('../controller/userroute');
const {sendReadings} = require('../controller/sendReadings');

router.post('/registerUser', RegisterUser);
router.post('/loginUser', LoginUser);
router.post('/profileupdate', Profile);
// router.post('/verifyToken', verifyToken);
router.get("/sensor-data", sendReadings);

module.exports = router;