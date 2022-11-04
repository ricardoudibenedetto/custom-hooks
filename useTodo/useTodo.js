import { useReducer } from "react";
import { todoReducer } from "./todoReducer"
const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] add todo",
            payload: todo
        }
        dispatchTodo(action);
    }
    const handleRemoveTodo = (id) => {
        dispatchTodo({
            type: "[TODO] Remove Todo",
            payload: id
        });
    }
    const handleToggleTodo = (id) => {
        dispatchTodo({
            type: "[TODO] Done Todo",
            payload: id
        });
    }

    return {
        todos,
        todoCount: todos.length,
        pendingTodoCount: todos.filter( todo => !todo.done).length,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo ,
    }
}
