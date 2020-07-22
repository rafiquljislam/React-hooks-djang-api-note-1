import React,{useState} from 'react'

const Hooks2_useState = () => {

    const number = 0
    const[num, setnum] = useState(number)

    return (
        <div>
            <h1>Count: {num}</h1>
            <button onClick={()=> setnum(prevCount => prevCount + 1)} >up</button>
            <button onClick={()=> setnum(number)} >Reset</button>
            <button onClick={()=> setnum(prevCount => prevCount - 1)} >Down</button>
        </div>
    )
}

export default Hooks2_useState
