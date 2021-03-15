var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({ err_code: 200, message: '获取成功', result: [{ id: 1, menuName: '112233', iconURL: '/lalal/lalal', status: 1 }] });
});

module.exports = router;