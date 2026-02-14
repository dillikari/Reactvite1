import { useState } from "react"

function Taskthree()
{
    const [cartValue,setCart]=useState(0)

    function addCart()
    {
        setCart(cartValue+1)
    }
    return(
        <>
        <h1>Cart:{cartValue}</h1>
        <div className="buttons">
            <button onClick={addCart} className="bg-blue-600 p-2 my-7 rounded-3xl">Cart</button>
            <button onClick={addCart} className="bg-blue-600 p-2 my-7 rounded-3xl">Cart</button>
            <button onClick={addCart} className="bg-blue-600 p-2 my-7 rounded-3xl">Cart</button>
            <button onClick={addCart} className="bg-blue-600 p-2 my-7 rounded-3xl">Cart</button>
            <button onClick={addCart} className="bg-blue-600 p-2 my-7 rounded-3xl">Cart</button>
        </div>
        </>
    )
}
export default Taskthree

