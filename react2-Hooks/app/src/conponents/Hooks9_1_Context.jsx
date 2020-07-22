import React,{useContext} from 'react'
import { UserContext,DataContext } from './Hooks9_0_Context'

{/* <UserContext.Consumer>
</UserContext.Consumer> */}

const Hooks9_1_Context = () => {

    const user = useContext(UserContext)
    const data = useContext(DataContext)

    return (
        <>
            {user}
            {
                data.map(dat=>{
                    return <h1>{dat}</h1>
                })
            }
        </>
    )
}

export default Hooks9_1_Context
