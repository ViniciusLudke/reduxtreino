import {createStore, combineReducers} from 'redux';
import pageReducer from '../store/pageReducers.js';

const rootReducer = combineReducers({
    pagina: pageReducer
})

//criamos store recebendo o create store, criamos a store com base nos reducers que criamos...
const store = createStore(rootReducer)


export default store;