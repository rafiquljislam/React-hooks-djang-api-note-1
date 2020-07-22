import React,{useState} from 'react'

const Hooks3_useState = () => {

    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <div> <br /> <br />
            <input 
                type="text"
                value={name.firstName}
                onChange={(e)=> setName({ ...name, firstName: e.target.value })}
                /> <br /> <br />
            <input 
                type="text"
                value={name.lastName}
                onChange={(e)=> setName({ ...name, lastName: e.target.value })}
                /> <br />
            <h1>First name = {name.firstName}</h1>
            <h1>Last name = {name.lastName}</h1>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default Hooks3_useState
