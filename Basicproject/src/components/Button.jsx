import { useState } from "react"

let Button=()=>
{
    let [values,setVal]=useState(0)

    function increase()
    {
        setVal(values+1)
    }
    function decrease()
    {
        setVal(values-1)
    }
    function reset()
    {
        setVal(values-values)
    }
    return(
       <>
       <div className="container bg-blue-700 m-auto my-52 w-2xs p-12 text-center text-amber-50 border-3 border-amber-950 rounded-4xl">
        <h1>Count : {values}</h1>
            <div className="buttons flex flex-row justify-between mt-5">
                <button className="border-3 border-amber-950 p-2 rounded-2xl bg-fuchsia-700" onClick={increase}>Increase</button>
                <button className="border-3 border-amber-950 p-2 rounded-2xl bg-fuchsia-700" onClick={decrease}>Decrease</button>
            </div>
        <button className="border-3 border-amber-950 p-2 px-5 mt-5 rounded-2xl bg-fuchsia-700" onClick={reset}>Reset</button>
       </div>
       </>
    )
}
export default Button



