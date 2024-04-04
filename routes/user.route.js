const router = require('express').Router();

const {
	homeView,
    getLogin,
    getRegister,
	postRegister,
    postLogin
} = require('../controllers/user.controller');

// Home/Index 
router.get('/', homeView);

// Register
router.get('/login', getLogin);
router.post('/login', postLogin);
// Register
router.get('/register', getRegister);
router.post('/register', postRegister);

module.exports = router;
