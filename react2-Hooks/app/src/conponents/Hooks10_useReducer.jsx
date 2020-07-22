import React,{useReducer} from 'react'


const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState        
        default:
            return state
    }
}

const Hooks10_useReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={()=>dispatch('increment')} >Increment</button>
            <button onClick={()=>dispatch('decrement')} >decrement</button>
            <button onClick={()=>dispatch('reset')} >reset</button>
        </div>
    )
}

export default Hooks10_useReducer
