// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
// import Parent from './components/parent';
// import { useEffect, useState } from 'react';
// import Child from './Components/Child';
// import GrandChild from './Components/GrandChild';

// function App () {

//   // :Learning : What Is Props Drilling ???
//   return (
//     <>
//     <UserContext.Provider message="Message Pass From App.JSX">
//       <Parent />
//     </UserContext.Provider>
//   </>
//   )




//   // let [press , setPress] = useState(false);

//   // const buttonPressed = () => {
//   //   setPress(true);
//   // }

//   // useEffect(() => {
//   //   if(press){
//   //   console.log("run")
//   //   let myTimeout = setTimeout(() => {
//   //     setPress(false);
//   //   } , 3000);
//   //   return () => clearTimeout(myTimeout);
//   // }
//   // }, [press]);

//   // return (
//   //   <>
//   //   <h1 className='text-center uppercase text-[28px]'>Hello World</h1>
//   //   {press && (<p className='w-[40%] m-auto p-[20px] text-[20px] italic shadow-xl mt-[30px] rounded-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, repellendus laudantium voluptatum ipsum esse quo! Quae officia quasi iste eius dolore earum. Provident, laborum ex. Ducimus magnam quod ab sunt?</p>)}
//   //   <button onClick={buttonPressed} className='border rounded px-[10px] block m-auto mt-[20px] cursor-pointer'>Show Message</button>

//   //   </>
//   // )

// }
// export default App;

import Parent from "./Components/Parent";
import Child from "./Components/Child";
import GrandChild from "./Components/GrandChild";
import { Link } from "react-router-dom";


// function App () {
//   return (
//     <>
//     <header>
//     <h1 className="border">Hello From App.jsx</h1>
//     <Link to="/Parent">Go To Parent</Link>
//     <Child />
//     <GrandChild />
//     </header>
//     </>
//   )
// }
// export default App;

function App () {
  return (
    <>
    <h1>Hello App.jsx</h1>
    </>
  )
}
export default App ;