import {combineReducers} from 'redux';
import ToDo from "./todoReducer";
export default combineReducers({

    tasks: ToDo

});