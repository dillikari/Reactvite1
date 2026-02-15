import { createContext } from "react"
import {  useState } from "react"
import Two from "./Two"

export const createInputContext = createContext()

function One()
{
    const [inputValue,setInputValue]=useState('Dilli Babu')


    return(
        <>
            <createInputContext.Provider value={{inputValue}}>
                <h1>Details</h1>
                <Two/>
            </createInputContext.Provider>
        </>
    )
}
export default One


