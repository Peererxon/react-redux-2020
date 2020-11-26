const { USER_REQUEST_FETCH, USER_SUCCES_FETCH, USER_ERROR_FETCH } = require("./userTypes");

const initialState = {
    users:[],
    loggin:null,
    error:''
}

const userReducer = ( state= initialState ,action ) => {
    switch (action) {
        case USER_REQUEST_FETCH:
            return {
                ...state,
                loggin:false,

            }
        
        case USER_SUCCES_FETCH:
            return {
                ...state,
                login: true,
                users: action.payload
            }

        case USER_ERROR_FETCH:
            return {
                ...state,
                users:[],
                error: action.payload
            }

        default:
          return state;
    }
}

export default userReducer;