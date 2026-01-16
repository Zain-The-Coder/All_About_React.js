import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Routing from './components/Routing';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Hello from "./components/Hello" ;
import About from './components/About';
import Contact from './components/Contact';


function App () {
    return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Routing />}/>
          <Route path="/hello" element={<Hello />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
    </BrowserRouter>

    )
}
export default App ;







// function App() {
//   return (
//     <>
//     {/* <div className='flex flex-col gap-[50px] items-center m-auto text-center text-[#fff] shadow-xl w-[70%]'><br /><br />
//      <h1 className='text-[45px]'>Hello World</h1>
//      <h2 className='text-[25px]'>Welcome To My First React Project</h2>
//      <p>Hello User , My Name Is Zain Ur Rehman and curruntly I completed JS and now our class 
//       move on React.JS so this is my first project Of React based on only initialization of 
//       React.js and learn how to prepare project and where write code.....</p>
//       <ButtonGenerator />
//       </div> */}
//       {/* <h1>hello world <UserNameGenerator /></h1>
//       <ButtonGenerator /> */}

//         {/* <h1>Hello <UserName name="Zain Ur Rehman" age="17 years" /></h1> */}
//         {/* <h1 name="Zain Ur Rehman">Hello <TakerName /></h1> */}

//     </>
//   )
// }

// function App () {
//   return (
//     <>
//     const [count, setCount] = user
//     </>
//   )
// }
// let x = prompt("what is your name")

// function App () {
//   return (
//     <>
//     <h1 className='text-[40px] uppercase text-[#00f] flex'>Hello</h1>
//     </>
//   )
// }
// import { UserName } from './components/textGenerator';

// function App () {
//   return (
//     <>
//     <h1 className='text-center text-[40px]'>Welcome to many confusing project !</h1>
//     <h2 className='text-[30px] flex gap-[10px] items-center justify-center'>The Author Is : <UserName name="Zain Ur Rehman" age="17"/></h2>
//     </>
//   )
// }

// import { useState } from 'react';
// function App () {
//   let [initialValue , finalValue] = useState(0);
//   console.log(initialValue);
//   console.log(finalValue)
//   return (
//     <>
//       <h1 className='text-[40px]'>Welcome On Zain Ur Rehman Counter</h1>
//       <div>
//         <button className='border px-[20px] py-[5px] rounded-2xl'>Increment</button>
//         <button className='border px-[20px] py-[5px] rounded-2xl'>Decrement</button>
//         <button className='border px-[20px] py-[5px] rounded-2xl'>Reset</button>
//       </div>
//     </>
//   )
// }

// import { Greeting } from './components/textGenerator';

// function App () {
//   return (
//     <>
//     <h1 className='text-[35px] text-center'>Hello World <Greeting name="Zain Ur Rehman" /></h1>
//     <img src="./assets/react.svg" alt="reactLogo" />
//     </>
//   )
// }

// import { useState } from 'react';

// function App () {
//     let [count , setCount] = useState(0);
//     return (
//         <>
//             <h1 className='text-[50px] text-center'>Welcome At Zain Counter</h1>
//             <h2 className='text-[30px] text-center'>Currunt Counter Is : {count}</h2> <br />
//             <div className='flex gap-[10px] justify-center'>
//                 <button className='border py-[7px] px-[20px] rounded cursor-pointer' onClick={() => {setCount(count + 1)}}>Increment</button>
//                 <button className='border py-[7px] px-[20px] rounded cursor-pointer' onClick={() => {setCount(count - 1)}}>Decrement</button>
//                 <button className='border py-[7px] px-[20px] rounded cursor-pointer' onClick={() => {setCount(count = 0)}}>Reset</button>
//             </div>

//         </>
//     )
// }

// function App () {
//     return (
//         <>
//         <h1 className='text-center text-[35px] uppercase'>hello Form</h1>
//         <form className='flex flex-col gap-[10px]'>
//             Enter Your Name : <input className='border p-[4px] rounded-2xl w-[30%]' type="text" name='text' />
//             Enter Your Email<input className='border p-[4px] rounded-2xl w-[30%]' type="email" name='email' />
//             Enter Your Password<input className='border p-[4px] rounded-2xl w-[30%]' type="password" name='password' />
//             <input className='cursor-pointer' type="submit" />
//         </form>
//         </>
//     )
// }
// export default App


