import React,{useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) =>{
    switch (action.type) {
        case 'FATCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FATCH_ERRORE':
            return {
                loading: false,
                error: 'Somthing is Worning',
                post: {}
            }    
        default:
            return state
    }
}

const Hooks15_Fetching_useReducer_2 = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>{
                dispatch({type:'FATCH_SUCCESS',payload: response.data})
            })
            .catch(error=>{
                dispatch({type:'FATCH_ERRORE'})
            })
    },[])

    return (
        <div>
            <h1>useReducer</h1>
            {state.loading ? 'Loding' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default Hooks15_Fetching_useReducer_2
