import React,{useContext, useEffect} from 'react'
import {Data} from './Router_s';

const Profile = () => {   

    const data = useContext(Data)

    const user = data.state.user
    const profile = data.state.profile

    return (
        <div>
            {
                user ? (
                    <>
                        <h1>Hi,{user.first_name} {user.last_name}</h1>
                        <h1>id = {user.id}</h1>
                        <h1>username = {user.username}</h1>
                        <h2>Email = {user.email}</h2>
                    </>
                )
                :
                ("Loding...Profile")
            }
            {
                profile ? (
                    <>
                        <h2>{profile.bio}</h2>
                        <img src={`${process.env.REACT_APP_API_URL}${profile.image}`} alt={profile.bio}/>
                    </>
                ):(
                    "Profile is Loding...."
                )
            }
        </div>
    )
}

export default Profile
