import React,{useContext} from 'react'
import {UserContext} from './Hooks13_0_useReducer_useContext'

const Hooks13_2 = () => {
    const context = useContext(UserContext)
    return (
        <div>
            <h1>Hooks13_2</h1>
            <h1>{context.state}</h1>
            <button onClick={()=>context.dispatch({type:'incrice', value: 1})} >Incrice</button>
            <button onClick={()=>context.dispatch({type:'dictice', value: 1})} >dictice</button>
            <button onClick={()=>context.dispatch({type:'reset'})} >Reset</button>
        </div>
    )
}

export default Hooks13_2
