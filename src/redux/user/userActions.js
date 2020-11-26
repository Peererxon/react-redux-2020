import { USER_ERROR_FETCH, USER_REQUEST_FETCH, USER_SUCCES_FETCH } from "./userTypes"


export const fetchUserRequest = () => {
    return {
        type: USER_REQUEST_FETCH
    }
}

export const fetchUserError = err => {
    return {
        type: USER_ERROR_FETCH,
        payload: err
    }
}

export const fetchuserSuccess = users => {
    return {
        type: USER_SUCCES_FETCH,
        payload: users
    }
}