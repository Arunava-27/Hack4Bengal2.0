const router = require('express').Router();
const {RegisterUser, LoginUser, verifyToken} = require('../controller/user.route');

router.post('/registerUser', RegisterUser);
router.post('/loginUser', LoginUser);
router.post('/verifyToken', verifyToken);


module.exports = router;