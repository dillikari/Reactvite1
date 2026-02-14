import React, { useEffect, useState } from 'react'

function App() {

  const [values,setItems]=useState([])
  useEffect(()=>
  {
    fetch("https://dummyjson.com/recipes")
    .then((res)=>res.json())
    .then((data)=>setItems(data))
    .catch((err)=>console.log(err))
  },[])


  return (
    <>
    <header className='text-3xl text-black flex justify-between bg-blue-600 p-4'>
      <h1>Menu Card</h1>
      <div>
        <ul className='flex gap-6 text-2xl mt-1 mx-6'>
          <li>Home</li>
          <li>About</li>
          <li>Sign in</li>
          <li>Login</li>
        </ul>
      </div>
    </header>
    <main className='text-center my-10'>
      <label className='text-3xl' htmlFor="item">Enter Item Name :</label>
      <input className='border-2 mx-5 p-1' id='item' type="text" placeholder='Enter Item Name ' />
    </main>
    </>
  )
}
export default App
