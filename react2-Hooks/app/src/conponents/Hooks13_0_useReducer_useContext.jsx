import React,{useReducer} from 'react'
import Hooks13_1 from './Hooks13_1'
import Hooks13_2 from './Hooks13_2'


export const UserContext = React.createContext()

const initialState = 0
const reducer = (state,action) => {
    switch (action.type) {
        case 'incrice':
            return state + action.value    
        case 'dictice':
            return state - action.value    
        case 'reset':
            return initialState   
        default:
            return initialState;
    }
}

const Hooks13_0_useReducer_useContext = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>useReducer with useContext</h1>
            <div>
                <h1>Home</h1>
                <h1>{state}</h1>
                <button onClick={()=>dispatch({type:'incrice', value: 1})} >Incrice</button>
                <button onClick={()=>dispatch({type:'dictice', value: 1})} >dictice</button>
                <button onClick={()=>dispatch({type:'reset'})} >Reset</button>
            </div>
            <UserContext.Provider value={{state:state,dispatch:dispatch}}>
                <Hooks13_1 />
                <Hooks13_2 />
            </UserContext.Provider>
        </div>
    )
}

export default Hooks13_0_useReducer_useContext
