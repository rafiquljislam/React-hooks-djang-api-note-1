import React, { useReducer, useState } from 'react'
import Home from './Home'
import Post from './Post'
import Profile from './Profile'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import Nav_bar from './Nav_bar';
import Login from './Login';
import Register from './Register';


export const Data = React.createContext()
const initialState = {
    posts: null,
    post: null,
    user: null,
    profile: null
}
const reducer = (state,action) =>{
        switch (action.type) {
            case 'POSTS':
                return {
                    posts:action.setPosts,
                    post: state.post,
                    user : state.user,
                    profile: state.profile
                }
            case 'POST':
                return {
                    posts:state.posts,
                    post: action.setPost,
                    user : state.user,
                    profile: state.profile
                }
            case 'USER':
                return {
                    posts: state.posts,
                    post: state.post,
                    user : action.setUser,
                    profile: state.profile
                }            
            case 'PROFILE':
                return {
                    posts: state.posts,
                    post: state.post,
                    user : state.user,                    
                    profile: action.setProfile
                }            
            default:
                return initialState
        }
    }
const Router_s = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const token  = props.cookies.get('p-token')
    // const token = '2d9676fcb4702eb5e800eae6e178f19f7eb7fa1a'
    return (
        <Data.Provider value={{state:state,dispatch:dispatch,token:token}} >
            <BrowserRouter>
            <Nav_bar />
            <Switch>
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/' component={Home} />
                <Route exact path='/:id' component={Post} />
            </Switch>
            </BrowserRouter>
        </Data.Provider>
    )
}

export default withCookies(Router_s)
