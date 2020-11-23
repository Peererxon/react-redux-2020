const initialState = {
    numOfCakes : 10
}

//inicializamos el estado conun vaor inicial
const cakeReducer = ( state = initialState,action ) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return {
                ...state, 
                numOfCakes: state.numOfCakes - 1
            }
    
        default:
            return state
            break;
    }
}

export default cakeReducer;