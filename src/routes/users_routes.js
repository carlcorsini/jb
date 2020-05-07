const ctrl = require('../controllers/users_ctrl')
const express = require('express')
const router = express.Router()

router.get('/', ctrl.getAll)




module.exports = router