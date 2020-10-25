import { SET_USER_INFO } from '../types/index'


export function setUserInfo(payload){
return {
    type: SET_USER_INFO,
    payload
}

}