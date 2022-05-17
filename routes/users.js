const express = require('express')
const router = express.Router()

const {getAll} = require('../controllers/users')

router.route('/users').get(getAll)

module.exports = router