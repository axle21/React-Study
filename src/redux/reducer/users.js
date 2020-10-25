import { SET_USER_INFO } from '../types/index'


const initialize = {
    info : {name : "bossAxle"}
}

const usersReducer = (state = initialize, action = {}) => {
    
 switch(action.type) {
    case SET_USER_INFO :
        return {
            ...state,
            info: {
                ...state.info,
                ...action.payload
            }
        }
    default : return state
 }

}

export default usersReducer