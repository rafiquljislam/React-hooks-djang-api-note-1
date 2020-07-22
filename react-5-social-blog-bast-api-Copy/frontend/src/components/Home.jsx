import React,{useContext, useEffect} from 'react'
import {Data} from './Router_s';
import { Link } from 'react-router-dom'

const Home = () => {
    const data = useContext(Data)
    // console.log(data.token)

    useEffect(()=>{
        const url = `${process.env.REACT_APP_API_URL}/api/post/`
        fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${data.token}`
            }
        })
      .then(res => res.json())
      .then(ress => data.dispatch({type:"POSTS",setPosts:ress}))
      .catch(err => console.log(err))

        const url2 = `${process.env.REACT_APP_API_URL}/api/user/`
        fetch(url2, {
            method: 'GET',
            headers:{
            'Authorization': `Token ${data.token}`
            }
        })
        .then(res => res.json())
        .then(ress =>  data.dispatch({type:"USER",setUser:ress}))
        .catch(err => console.log(err))

    },[])

    useEffect(()=>{
        const url = `${process.env.REACT_APP_API_URL}/api/profile/`
        fetch(url, {
          method: 'GET',
          headers:{
            'Authorization': `Token ${data.token}`
          }
        })
        .then(res => res.json())
        .then(ress =>  data.dispatch({type:"PROFILE",setProfile:ress}))
        .catch(err => console.log(err))

    },[])


    return (
        <>
            {
                data.token ? (
            <div className="container-fluid">
                    <h1 className="text-center my-3">Photo library</h1>
                    <div className='text-center'>
                        <input className="form-control" type="file"/><br/>
                        <button className="btn btn-info">Add Photo</button>
                    </div>
                <div className="row justify-content-center">
                    {
                        data.state.posts ? (data.state.posts.map(post=>{
                            return (
                                <>
                                <div key={post.id} className="col-md-3 my-2">
                                    <figure className="figure">
                                        <Link to={`/${post.id}`}>
                                            <img src={`${process.env.REACT_APP_API_URL}${post.image}`} className="figure-img img-fluid rounded image_size" alt={post.title} />
                                        </Link>
                                        <figcaption className="figure-caption text-center">{post.title}</figcaption>
                                    </figure>
                                </div>
                                </>
                            ) 
                        }))
                        :
                        ('Loding...')
                    }
                </div>
            </div>
        ):(
            window.location.href='login'
        )
    }
        </>                        
    )
}

export default Home
