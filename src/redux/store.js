import { applyMiddleware, combineReducers, createStore } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


// se le pasa por parametro el reducer de nuestra aplicacion
//const store = createStore(cakeReducer)
//para un solo reducer

//se combinan los reducers y nombran atributos para cada reducer
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream:iceCreamReducer
})

const store = createStore(rootReducer, 
    composeWithDevTools
    (
        applyMiddleware (logger)) 
    )
export default store