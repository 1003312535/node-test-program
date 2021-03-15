var express = require('express');
var router = express.Router();
const RES = require('../utils/status')
const { MENU } = require('../mysql/sql')
const connection = require('../mysql/config')

//获取请求一级导航
router.get('/menuList', function(req, res, next) {
    connection.query(MENU.readAll, (err, result) => {
        let cacheMenuList = []
        result.forEach(item => {
            if (item.pId == 0) {
                cacheMenuList.push(item)
            }
        })

        // cacheMenuList.forEach(item1 => {
        //     let cacheList = []
        //     result.forEach(item2 => {
        //         if (item1.id == item2.pId) {
        //             cacheList.push(item2)
        //         }
        //     })
        //     if (cacheList.length > 0) {
        //         item1.children = cacheList
        //     }
        // })

        res.send(RES.successEvent(cacheMenuList))
    })
});
//获取请求导航tree
router.get('/menuTreeList', function(req, res, next) {
    connection.query(MENU.readAll, (err, result) => {
        let cacheMenuList = []
        result.forEach(item => {
            if (item.pId == 0) {
                cacheMenuList.push(item)
            }
        })
        cacheMenuList.forEach(item1 => {
            let cacheList = []
            result.forEach(item2 => {
                if (item1.id == item2.pId) {
                    cacheList.push(item2)
                }
            })
            if (cacheList.length > 0) {
                item1.children = cacheList
            }
        })
        res.send(RES.successEvent(cacheMenuList))
    })
});
//新增 导航 数据
router.post('/saveMenu', function(req, res, next) {
    console.log(req.body, 'req.body---')
    connection.query(MENU.save, req.body, (err, result) => {
        console.log(err, result)
    })
    res.send(RES.successEvent({ name: '111' }))
});
//获取导航详情
router.get('/getMenuDetail', function(req, res, next) {
    let id = req.query.id
    console.log(req.query)
    connection.query(MENU.menuDetail, id, (err, result) => {
        console.log(result)
        res.send(RES.successEvent(result))
    })
});
module.exports = router;