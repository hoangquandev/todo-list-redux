import { ADD_TODO, DELETE_TODO, SET_FILTER, TOGGLE_TODO } from "../constants/actionType";


let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});
export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: {
        id
    }
});
// reducer : state:[{item1, item2 , item3}]

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
