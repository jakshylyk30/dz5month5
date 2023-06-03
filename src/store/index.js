import {combineReducers, applyMiddleware, legacy_createStore as createStore} from 'redux'
import counterReducer from './counterReducer'
import todosReducer from './todosReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    todos: todosReducer,
    counter: counterReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))

export default store