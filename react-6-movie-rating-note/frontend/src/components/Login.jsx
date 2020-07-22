import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

class Login extends Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    inputChange = (e) =>{
        let cred = this.state.credentials;
        cred[e.target.name] = e.target.value;
        this.setState({credentials: cred})
        // console.log(this.state.credentials)
    }
    login = e => {
        // console.log(this.state.credentials)
        const url = `${process.env.REACT_APP_API_URL}/auth/`
        fetch(url, {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        }).then(res => res.json())
        .then(ress =>{
            console.log(ress.token);
            this.props.cookies.set('mr-token', ress.token);
            window.location.href = "/movies";
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="text-center">
                <h1>Loig now</h1>
                <span>Username</span> <br/>
                <input type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.inputChange}
                /> <br/>
                <span>Password</span> <br/>
                <input type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.inputChange}
                /> <br/> <br/>
                <button className="btn btn-info" onClick={this.login} >Login</button>
                <p>Register Now,<Link to='/register'>Register</Link></p>
            </div>
        );
    }
}

export default withCookies(Login);