const { MENU } = require('../mysql/sql')
const connection = require('../mysql/config')

module.exports = {
        getTreeMenuList() {
            return new Promise((resolve, reject) => {
                    connection.query(MENU.readAll, (err, result) => {})
                }
            }