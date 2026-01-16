import { Link } from "react-router-dom";
import Nav from "./Nav";

function Routing () {
    return (
        <>
        
        <header className="p-[50px] flex justify-around items-center">
            <h1 className="text-[50px] font-bold">React Practise</h1>
            <nav>
                <ul className="flex flex-col">
                    <Nav path="/about" msg="About"/>
                    <Nav path="/hello" msg="Hello" />
                    <Nav path="/contact" msg="contact" />
                </ul>
            </nav>
        </header>
        <main>
            <h2 className="text-center italic text-[35px]">Hello , Welcome This Is Home Page</h2>
        </main>
        </>
    )
}

export default Routing ;