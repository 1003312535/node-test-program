var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'teststudy'
})

//启动链接
connection.connect();


connection.query('select * from menu', function(err, data, fields) {
    if (err) {
        console.log(err)
        return
    };

})
module.exports = connection