import React,{useState, useEffect} from 'react'



const Hooks6_useEffect = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect = Updating document title')
        document.title = `You Clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={()=>setCount(count + 1)} >Click{count}</button>
        </div>
    )
}

export default Hooks6_useEffect
