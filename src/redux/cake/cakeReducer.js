const initialState = {
    numberOfCakes : 10
}

//inicializamos el estado conun vaor inicial
const cakeReducer = ( state = initialState,action ) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return {
                ...state, 
                numberOfCakes: state.numberOfCakes - action.payload
            }
    
        default:
            return state
    }
}

export default cakeReducer;