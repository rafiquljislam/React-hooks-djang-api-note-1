import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Hooks14_Fetching_useReducer_1 = () => {
    const [loading, setLoding] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>{
                setLoding(false)
                setPost(response.data)
                setError('')
            })
            .catch(error=>{
                setLoding(false)
                setPost({})
                setError('Somthing is Wrong')
            })
    })
    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    )
}

export default Hooks14_Fetching_useReducer_1
