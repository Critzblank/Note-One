import {ADD_TASK, REMOVE_TASK, EDIT_TASK} from "../actions/types";
import _ from "lodash";

export default function (state = [], action){
    switch(action.type){

            case ADD_TASK:
            const task = _.merge({taskText: action.payload}, {id: state.length}, {edit: false});
            console.log("TASK2", task);
            const newState = [...state, task];
            return newState;

            case EDIT_TASK:
            const keepExisting = _.remove(state, task => {
                return task.id == action.payload.id;
            });
            const addNew = _.merge({taskText: action.payload.text, id: action.payload.id, edit: false});
            const addNewTask = _.merge(keepExisting, addNew);
            const taskList = [...state, addNewTask];
            return taskList;

            case REMOVE_TASK:
            const removeTask = _.remove(state, task => {
                return task.id != action.payload
            })
            return removeTask;

            default:
            return state;
    }
}