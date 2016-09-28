var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    //res.send('respond with a resource');
    var users = ["Baisen", "Keith", "Jamie"];

    res.render('users', {title: 'Users', users: users});

});

module.exports = router;
