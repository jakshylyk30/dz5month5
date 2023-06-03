import {useSelector, useDispatch} from 'react-redux'
import { increaseCounter, decreaseCounter } from './store/counterReducer'

const Counter = () => {
    const counter = useSelector(state => state.counter.counter)
    const dispatch = useDispatch()
    const increase = () => {
      dispatch(increaseCounter())
    }
    const decrease = () => {
      if (counter > 0) dispatch(decreaseCounter())
    }
    return (
      <>
        <button onClick={decrease}>-</button>
        {counter}
        <button onClick={increase}>+</button>
      </>
    )
}
export default Counter