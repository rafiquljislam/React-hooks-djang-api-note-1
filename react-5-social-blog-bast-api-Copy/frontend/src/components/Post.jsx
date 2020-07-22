import React,{useContext, useEffect} from 'react'
import {Data} from './Router_s';

const Post = (props) => {
    const data = useContext(Data)
    const postId =  parseInt(`${props.match.params.id}`)
    useEffect(()=>{
        const url = `${process.env.REACT_APP_API_URL}/api/post/${postId}/`
        fetch(url, {
          method: 'GET',
          headers:{
            'Authorization': `Token ${data.token}`
          }
        })
        .then(res => res.json())
        .then(ress =>  data.dispatch({type:"POST",setPost:ress}))
        .catch(err => console.log(err))

    },[])
    return (
        <div>
            {
                data.state.post ? (
                    <>
                        {
                            <>
                            <div key={data.state.post.id} className="text-center">
                                {
                                    data.state.user ?
                                    (<>
                                        {
                                            data.state.user.id === data.state.post.user ?
                                            (
                                                <div className="my-2">
                                                    <button className="btn btn-danger">Update</button>
                                                    <button className="btn btn-danger mx-1">Delete</button>
                                                </div>
                                            )
                                            :
                                            ('')
                                        }
                                        </>
                                    ):
                                    ("")
                                }
                                <img className="post_image" src={`${process.env.REACT_APP_API_URL}${data.state.post.image}`} alt="" />
                                <h1>{data.state.post.title}</h1>
                            </div>
                            </>
                        }
                    </>
                )
                :
                ("Loding....")
            }
        </div>
    )
}

export default Post
