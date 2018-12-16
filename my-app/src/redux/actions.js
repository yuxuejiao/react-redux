import {ADD_TODO} from "./actionType";
let nextTodoId = 0;
export const addTodo = (content)=>{
    return {
        type: ADD_TODO,
        payload: {
            id: ++nextTodoId,
            content
        }
    }

}