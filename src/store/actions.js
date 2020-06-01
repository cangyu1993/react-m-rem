export default {
    changeShowNum(num) {
        return {
            type: 'CHANGE_SHOW_NUM',
            num,
        }
    }
}  //action就是带返回值的函数
