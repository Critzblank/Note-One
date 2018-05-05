import {ADD_TASK, REMOVE_TASK, EDIT_TASK} from './types';

export const addTask = (task) => {

    console.log("TASK", task);
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const removeTask = (id) => {

    return {
        type: REMOVE_TASK,
        payload: id
    }

}

export const editTask =(text, id) => {

    return {
        type: EDIT_TASK,
        payload: {id, text}
    }


}