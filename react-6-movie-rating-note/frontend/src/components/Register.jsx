import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Register extends Component {
    state={
        register: {
            username: '',
            password: ''
        }
    }
    inputChange = (e) =>{
        let cred = this.state.register;
        cred[e.target.name] = e.target.value;
        this.setState({register: cred})
        // console.log(this.state.register)
    }
    register = e => {
        console.log(this.state.register);
        window.location.href = '/';
        const url = `${process.env.REACT_APP_API_URL}/api/users/`
        fetch(url, {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.register)
        }).then(res => res.json())
        .then(ress =>{
            window.location.href = "/";
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="text-center">
                <h1>Register now</h1>
                <span>Username</span> <br/>
                <input type="text"
                    name="username"
                    value={this.state.register.username}
                    onChange={this.inputChange}
                /> <br/>
                <span>Password</span> <br/>
                <input type="password"
                    name="password"
                    value={this.state.register.password}
                    onChange={this.inputChange}
                /> <br/> <br/>
                <button className="btn btn-info" 
                onClick={this.register} >Register</button>

                <p>Login Now,<Link to='/'>Login</Link></p>
            </div>
        );
    }
}

export default Register;