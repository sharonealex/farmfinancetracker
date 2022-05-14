const router = require('express').Router();

const { createUser, loginUser } = require("../../controllers/users")
const { saveStartHours } = require("../../controllers/timesheet")

router.route('/').post(createUser);
router.route('/login').post(loginUser);
router.route('/timesheet').post(saveStartHours)

module.exports = router;