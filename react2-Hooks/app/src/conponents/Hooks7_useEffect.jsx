import React,{useState, useEffect} from 'react'

const Hooks7_useEffect = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition )
    }, [])

    return (
        <div>
            <h1>X- {x}-- Y- {y}</h1>
        </div>
    )
}

export default Hooks7_useEffect
