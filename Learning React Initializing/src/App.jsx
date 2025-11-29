import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonGenerator from './components/Button'

function App() {
  return (
    <>
    <div className='flex flex-col gap-[50px] items-center m-auto text-center text-[#fff] shadow-xl w-[70%]'><br /><br />
     <h1 className='text-[45px]'>Hello World</h1>
     <h2 className='text-[25px]'>Welcome To My First React Project</h2>
     <p>Hello User , My Name Is Zain Ur Rehman and curruntly I completed JS and now our class 
      move on React.JS so this is my first project Of React based on only initialization of 
      React.js and learn how to prepare project and where write code.....</p>
      <ButtonGenerator />
      </div>
    </>
  )
}

export default App
