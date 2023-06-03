import axios from "axios"

const initialState = {
    todos: []
}

const todosReducer = (state=initialState, action) => {
    if (action.type == 'ADD_TODO') {
        return {...state, todos: [...state.todos, {title: action.payload}]}
    }
    if (action.type == 'REMOVE_TODO') {
        return {...state, todos: [...state.todos.filter(i => i.id !== action.payload)]}
    }
    if (action.type == 'DELETE_TODO_REQUEST') {
        return {...state, todos: [...state.todos.filter(i => i.id !== action.payload)]}
    }
    if (action.type == 'SET_TODOS') {
        return {...state, todos: action.payload}
    }
    return state
}

export const fetchTodos = () => {
    return async (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(
                resp => dispatch(setTodos(resp.data))
            )
    }
}

export const deleteTodo = (id) => {
    return async (dispatch) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(() => {
                dispatch(deleteTodoRequest(id));
            })
    };
};

const deleteTodoRequest = (id) => {
    return {
        type: 'DELETE_TODO_REQUEST',
        payload: id,
    };
};


const setTodos = payload => ({type: 'SET_TODOS', payload})


export const addTodo = payload => ({type: 'ADD_TODO', payload})

// export const deleteTodos = payload => ({type: 'REMOVE_TODO', payload})



export default todosReducer;