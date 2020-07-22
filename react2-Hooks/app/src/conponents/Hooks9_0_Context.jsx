import React from 'react'
import Hooks9_1_Context from './Hooks9_1_Context'

const data = ['data-1','data-2','data-3','data-4','data-5']
export const UserContext = React.createContext()
export const DataContext = React.createContext()

const Hooks9_0_Context = () => {
    return (
        <div>
            <UserContext.Provider value={'User'}>
                <DataContext.Provider value={data}>
                    <Hooks9_1_Context />
                </DataContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default Hooks9_0_Context
