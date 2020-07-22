import React,{useState, useEffect} from 'react'



const Hooks5_useEffect = () => {

    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You Clicked ${count} times`
    })

    return (
        <div>
            <button onClick={()=>setCount(count + 1)} >Click{count}</button>
        </div>
    )
}

export default Hooks5_useEffect
