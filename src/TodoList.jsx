import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import {addTodo, deleteTodo, fetchTodos} from './store/todosReducer'


const TodoList = () => {
    const [newtodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])
    

    const handleClick = () => {
        if (newtodo.trim() !== '') {
            dispatch(addTodo(newtodo))
            setNewTodo('')
        }
    }

    const onDeleteTodo = (todo) => {
        dispatch(deleteTodo(todo))
    }

    return (
        <div>TodoList 
            <input type="text" onChange={e => setNewTodo(e.target.value)} value={newtodo} />
            <button 
                onClick={handleClick}
            >Добавить</button>
            <ul>
                {todos.map(t =>
                    <li key={t.id}>
                        <button onClick={
                            () => onDeleteTodo(t.id)
                        }>delete</button>
                        {t.title}
                    </li>
                )}
            </ul>
        </div>
    )
}
export default TodoList