const router = require('express').Router()
const Controller = require('../controllers/controllerUser')

router.post('/register', Controller.registerUser)
router.post('/login', Controller.loginUser)
router.delete('/:id', Controller.deleteUser)
router.put('/:id', Controller.editUser)
router.get('/:id', Controller.userById)

module.exports = router