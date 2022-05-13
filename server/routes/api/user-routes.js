const router = require('express').Router();

const { createUser, loginUser } = require("../../controllers/users")

router.route('/').post(createUser);
router.route('/login').post(loginUser)


module.exports = router;