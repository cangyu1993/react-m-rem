export default {
    saveToken(token) {
        return {
            type: 'SAVE_TOKEN',
            token,
        }
    }
}  //action就是带返回值的函数
