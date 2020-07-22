import React,{useContext} from 'react'
import { NavLink, Link } from 'react-router-dom';
import {Data} from './Router_s';
import { withCookies } from 'react-cookie';

const Nav_bar = (props) => {
    const data = useContext(Data)
    
    const logout = (e) => {
        props.cookies.remove('p-token');
        window.location.href = '/';
      }

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Photos</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {
                        data.token ? (
                            <>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="profile">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" onClick={logout} to="#">Logout</NavLink>
                            </li>
                            </>

                        ):(
                            <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="login">LogIn</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="register">Register</NavLink>
                            </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </nav>
            
        </div>
    )
}

export default withCookies(Nav_bar)
