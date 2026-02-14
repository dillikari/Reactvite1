import { useEffect, useState } from "react"

function Taskone()
{
    const [counter,setValue]=useState(0)
    const [counter1,setValue1]=useState(0)

    // // type:1 It will executes only on render and  all state changes
    // useEffect(()=>
    // {
    //     console.log("UseEffect Concept")
    // })

    // type:2 It will executes only on render and all state changes
    // useEffect(()=>
    // {
    //     console.log("UseEffect Concept")
    // },[counter])


    // type:3 It will executes only on render
    useEffect(()=>
    {
        console.log("UseEffect Concept")
    },[])

    
    return(
        <>
            <h1 className="bg-amber-500 p-2">{counter}</h1>
            <h1 className="bg-amber-500 p-2">{counter1}</h1>
            <button className="bg-blue-600 p-2" onClick={()=>setValue(counter+1)}>Increase</button>
            <button className="bg-blue-600 p-2" onClick={()=>setValue1(counter1+1)}>Increase</button>
        </>
    )
}
export default Taskone

