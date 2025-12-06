import { use, useState } from 'react'
import './App.css'

function App () {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setError("Input Field Is Empty!");
      return;
    }

    localStorage.setItem("UserEmail", email);
    localStorage.setItem("UserPassword", password);
    setError("");
  }

  return (
    <>
    <section className="w-[35%] bg-white border rounded-2xl shadow-xl p-8">
      <h2 className="text-[40px] font-bold text-center mb-6 text-blue-600">Sign Up Form</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="font-semibold">Enter Your Email :</label>
        <input type="email"className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="font-semibold">Enter Your Password :</label>
        <input type="password"className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="text-red-500 text-[24px] italic">{error}</p>

        <input type="submit" className="border bg-blue-600 text-white rounded-xl p-3 w-[40%] cursor-pointer hover:bg-blue-700 transition" />
      </form>
    </section>
    </>
  )
}

export default App
