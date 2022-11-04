export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case '[TODO] add todo':
            return [...initialState, action.payload]
            break;
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload)
            break;
        case '[TODO] Done Todo':
            return initialState.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo)
            break;

        default:
            return initialState;
            break;
    }
}