import { useEffect, useState } from 'react'

function App() {
  const [cart,setCart]=useState(0)
  function addCart()
  {
    setCart(cart+1)
  }
  const [items,setItems]=useState([])
  useEffect(()=>
  {
    fetch("https://dummyjson.com/recipes")
        .then((res)=>res.json())
        .then((data)=>setItems(data))
        .catch((err)=>console.log(err))
  },[])
  return (
    <>
    <header className="flex bg-orange-800 text-4xl text-cyan-500 justify-between p-5 my-0 flex-col md:flex-col md:text-center  lg:flex-row">
      <div className="one">
            <h1>Menu Card</h1>
      </div>
      <div className="two text-2xl">
            <ul className='flex'>
              <li className='mx-3'>About</li>
              <li className='mx-3'>Order</li>
              <li className='mx-3'>Sign in</li>
              <li className='mx-3'>Login</li>
              <li>Cart:{cart}</li>
            </ul>
      </div>
    </header>
    <main className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {items.recipes && items.recipes.map((r)=>
      (
        <div className="shadow-2xl shadow-emerald-500 w-72 p-5 flex flex-col justify-around mx-16 border-2 border-amber-950 rounded-2xl my-2">
          <img src={r.image} alt={r.image} />
          <h1>Item Name : {r.name}</h1>
          <p>Rating : {r.rating}</p>
          <div className="buttons flex justify-between">
          <button className='border-2 border-black bg-amber-600 py-1 px-11'>Buy</button>
          <button className='border-2 border-black bg-amber-600 py-1 px-11' onClick={addCart}>Cart</button>
          </div>
        </div>
      )
      )}
    </main>
    </>
  )
}
export default App
