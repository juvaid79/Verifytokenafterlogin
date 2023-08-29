const express = require('express')
const router = express.Router();
const { TaskAdd, GetTask } = require('../Controllers/TaskController');
const Auth = require("../Middleware/Auth")


router.post('/task-add', Auth, TaskAdd)
router.get('/get-task/:userId', Auth, GetTask)


module.exports = router;