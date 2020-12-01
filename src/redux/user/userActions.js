import { USER_ERROR_FETCH, USER_REQUEST_FETCH, USER_SUCCES_FETCH } from "./userTypes"
const axios = require('axios').default;

export const fetchUserRequest = () => {
    return {
        type: USER_REQUEST_FETCH
    }
}

/**
 * 
 *
 * @param {string} err "mensaje de error de la api"
 * @public
 */
export const fetchUserError = err => {
    return {
        type: USER_ERROR_FETCH,
        payload: err
    }
}

/**
 * Usuarios que traera la respuesta de la api
 *
 * @param {[]} users
 * @public
 */
export const fetchuserSuccess = users => {
    return {
        type: USER_SUCCES_FETCH,
        payload: users
    }
}

/**
 * @description esta accion utiliza las otras acciones y actualiza el estado de la aplicacion segun sea lo que esta devuelva(es un action asincrono)
 */
export const fetchUsers = () => {
    return ( dispatch ) => {
        dispatch( fetchUserRequest() ) //actualizando el estado de la aplicacion a "solicitando datos" con el dispatch
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then( response => {
            const user = response.data
            dispatch( fetchuserSuccess(user) )
        })
        .catch( err => {
            console.error(err)
            const errMsj = err.message
            dispatch( fetchUserError(errMsj) )
        })
    }
}