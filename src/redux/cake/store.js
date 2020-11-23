import { createStore } from 'redux';
import cakeReducer from './cakeReducer';

// se le pasa por parametro el reducer de nuestra aplicacion
const store = createStore(cakeReducer)

export default store