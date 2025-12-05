import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
  return (
    <>
    <h1 className='text-center text-[50px]'>React Assignment No 1</h1>
    <br /><br />


<article className="flex justify-around p-10 bg-gray-100 min-h-screen">
  <section className="w-[35%] bg-white border rounded-2xl shadow-xl p-8">
    <h2 className="text-[40px] font-bold text-center mb-6 text-blue-600">Sign Up Form</h2>
    <form className="flex flex-col gap-4">
      <label className="font-semibold">Enter Your Name :</label>
      <input className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" name="text" />

      <label className="font-semibold">Enter Your Email :</label>
      <input className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" name="email" />

      <label className="font-semibold">Enter Your Password :</label>
      <input className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400" type="password" name="password" />

      <p className="text-red-500 text-[24px] italic">error show here</p>

      <input className="border bg-blue-600 text-white rounded-xl p-3 w-[40%] cursor-pointer hover:bg-blue-700 transition" type="submit" />
    </form>
  </section>

  <section className="w-[35%] bg-white border rounded-2xl shadow-xl p-8">
    <h2 className="text-[40px] font-bold text-center mb-6 text-green-600">Sign In Form</h2>
    <form className="flex flex-col gap-4">
      <label className="font-semibold">Enter Your Name :</label>
      <input className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400" type="text" name="text" />

      <label className="font-semibold">Enter Your Email :</label>
      <input className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400" type="email" name="email" />

      <label className="font-semibold">Enter Your Password :</label>
      <input className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400" type="password" name="password" />

      <p className="text-red-500 text-[24px] italic">error show here</p>

      <input className="border bg-green-600 text-white rounded-xl p-3 w-[40%] cursor-pointer hover:bg-green-700 transition" type="submit" />
    </form>
  </section>

</article>

    </>
  )
}
export default App
