module.exports = {
    //成功响应
    successEvent(payload = null) {
        return {
            err_code: '200',
            message: '请求成功',
            result: payload
        }
    },
    //失败响应
    failedEvent(payload = null) {
        return {
            err_code: '500',
            message: '响应失败',
            result: payload
        }
    }
}