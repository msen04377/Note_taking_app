import {createStore,combineReducers} from 'redux';
import foodReducer from './src/reducers/foodReducer';

const rootReducer = combineReducers({
    foods: foodReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;