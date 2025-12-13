import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { useEffect, useState } from 'react';

function App () {

    let [state , setState] = useState(false);

    const changeState = () => {
        setState(true);
    }

  let myTimeOut = useEffect(() => {
    console.log("Effected...");
    let myTimeOut = setTimeout(() => {
      setState(false);
    }, 5000);
    return () => clearTimeout(myTimeOut);
  }, [state]);

    return (
        <>
        <h1 className='text-center text-[30px] italic uppercase'>Hello React</h1>
        <button onClick={changeState} className='border px-[20px] py-[3px] rounded-2xl cursor-pointer'>Show Message</button>
        {state && (<div className="bg-green-300 absolute right-5 top-20 text-green-800 text-2xl p-5 rounded-2xl">Hello World
          </div>
)}
        </>
    )

}
export default App
