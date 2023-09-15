const login = require('../controllers/users/SQL/loginSQL');
const register = require('../controllers/users/SQL/registerSQL');

var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next) {
	console.log(`login `);
	console.log(req.params);
	res.render('login');
});

router.post('/login', login);

router.get('/register', function (req, res, next) {
	res.render('register');
});

router.post('/register', register);

module.exports = router;
