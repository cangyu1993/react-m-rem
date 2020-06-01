const initialState = {
    showNum: 0
}  //初始状态

export default (state = initialState, action) => {
    switch (action.type) {
        case  'CHANGE_SHOW_NUM':
            return {
                ...state,
                showNum: action.num
            }
        default:
            return state
    }
}   //根据action对state做出处理
