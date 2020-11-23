import { BUY_ICECREAM } from './iceCreamTypes'

const initialState = {
    numberOficeCreams: 20
}

const iceCreamReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOficeCreams: state.numberOficeCreams - 1
            }
    
        default:
            return state
    }
}

export default iceCreamReducer;