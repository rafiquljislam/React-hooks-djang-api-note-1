import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { withCookies } from 'react-cookie';



const Login = (props) => {


    const [state, setstate] = useState({username:'',password:''})

    const login = () => {
        const url = `${process.env.REACT_APP_API_URL}/api/login/`
        fetch(url, {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(state)
        }).then(res => res.json())
        .then(ress =>{
            console.log(ress.token);
            props.cookies.set('p-token', ress.token);
            window.location.href = "/";
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="text-center">
                <h1>Loig now</h1>
                <span>Username</span> <br/>
                <input type="text"
                    name="username"
                    value={state.username}
                    onChange={(e)=> setstate({...state, username: e.target.value })}
                /> <br/>
                <span>Password</span> <br/>
                <input type="password"
                    name="password"
                    value={state.password}
                    onChange={(e)=> setstate({...state, password: e.target.value })}
                /> <br/> <br/>
                <button className="btn btn-info" onClick={login} >Login</button>
                <p>Register Now,<Link to='/register'>Register</Link></p>
            </div>
        </div>
    )
}

export default withCookies(Login)

