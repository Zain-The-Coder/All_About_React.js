import { useState } from "react";

function SignUp () {
    const [error , setError] = useState("");
    const [userName , setUserName] = useState("");
    const [userEmail , setUserEmail] = useState("");
    const [userPassword , setUserPassword] = useState("");

    
    function formSubmit (e) {
        let x = userPassword.length;
        e.preventDefault();
        
        if(!userName || !userEmail || !userPassword) {
            setError("Fill The Above All Fields !");
            return;
        }
        if(x < 6) {
            setError("Password Is Too Short !");
            return ;
        }
        setError("Form Submitted Successfully !");
        let userInfo = {
            nameOfUser : userName , 
            emailOfUser : userEmail , 
            passwordOfUser : userPassword ,
        }

    }

    return (
        <>
        <section className="min-h-screen flex items-center justify-center bg-gray-100 p-[40px] w-[100%]">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
            
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up Form</h1>

                <form className="flex flex-col gap-4" onSubmit={formSubmit}>
                    
                    <div className="flex flex-col text-left">
                        <label htmlFor="userName" className="font-semibold text-gray-700">Enter Your Name</label>
                        <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" id="userName" onChange={(e) => {setUserEmail(e.target.value)}}/>
                    </div>

                    <div className="flex flex-col text-left">
                        <label htmlFor="userEmail" className="font-semibold text-gray-700">Enter Your Email</label>
                        <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" id="userEmail" onChange={(e) => {setUserPassword(e.target.value)}} />
                    </div>

                    <div className="flex flex-col text-left">
                        <label htmlFor="userPassword" className="font-semibold text-gray-700">Enter Your Password</label>
                        <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="password" id="userPassword" onChange={(e) => {setUserPassword(e.target.value)} }/>
                    </div>

                    <p className="text-red-500 font-semibold">{error}</p>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl font-semibold transition-all mt-3 cursor-pointer" type="submit">Sign Up</button>
                </form> 
            </div>
        </section>
        </>
    );
}

export default SignUp;
