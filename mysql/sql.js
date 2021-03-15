module.exports = {
    MENU: {
        save: `INSERT INTO menu SET ?`,
        readAll: `SELECT * FROM menu where menuStatus = 1`,
        menuDetail: `SELECT * FROM menu WHERE id = ?`
    }
}