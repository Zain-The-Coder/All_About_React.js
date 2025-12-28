// import { useEffect, useState } from "react";

// const App = () => {

//   let [users , setUsers] = useState([]);
//   let [error , setError] = useState("");
//   let [loading , setLoading] = useState(true);

//   useEffect(() => {

//     async function fetchUser() {
//       try {
//       let myFetcher = await fetch("https://jsonplaceholder.typicode.com/users");
//       let jsonObject = await myFetcher.json();

//       setUsers(jsonObject);
//       setLoading(false)
//       } catch (error) {
//           setError(error.toString());
//           setLoading(false)
//       }
//     }
//     fetchUser();
//   } , [])

//   return(
//     <>
//     <h1 className="text-center text-[40px] uppercase">Hello World</h1>
//     {loading && <p>Data Is Loading.......</p>}
//     {error}
//   <table className="w-full max-w-xl mx-auto border border-gray-300 border-separate border-spacing-y-2">
//      <thead>
//        <tr className="bg-gray-200">
//          <th className="p-3 text-left border border-gray-300">User Id</th>
//          <th className="p-3 text-left border border-gray-300">User Name</th>
//          <th className="p-3 text-left border border-gray-300">User Email</th>
//          <th className="p-3 text-left border border-gray-300">User City</th>
//        </tr>
//      </thead>
//      <tbody>
//       {users.map((user) => (
//         <tr key={user.id}>
//         <td className="p-3 border border-gray-300">{user.id}</td>
//         <td className="p-3 border border-gray-300">{user.name}</td>
//         <td className="p-3 border border-gray-300">{user.email}</td>
//         <td className="p-3 border border-gray-300">{user.address.city}</td>
//       </tr>
//       ))}
//     </tbody>
//   </table>
//     </>
//   )
// }
// export default App;






// const App = () => {
//     let [users , setUsers] = useState([]);
//     let [load , setLoading] = useState(true);

//     useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/users").then((resolve) => {
//       let myPromise = (resolve.json());
//       return myPromise ;
//   }).then((dataReturned) => {
//       setUsers(dataReturned);
//       setLoading(false);
//   })
// } , [])


// return (
//   <>
//     <h1 className="text-center text-[35px]">Hello World</h1>

//   {load && <p>Loading....</p>}
//   <table className="w-full max-w-xl mx-auto border border-gray-300 border-separate border-spacing-y-2">
//     <thead>
//       <tr className="bg-gray-200">
//         <th className="p-3 text-left border border-gray-300">User Id</th>
//         <th className="p-3 text-left border border-gray-300">User Name</th>
//         <th className="p-3 text-left border border-gray-300">User Email</th>
//         <th className="p-3 text-left border border-gray-300">User City</th>
//       </tr>
//     </thead>

//     <tbody>
//       {users.map((user) => (
//         <tr key={user.id}>
//         <td className="p-3 border border-gray-300">{user.id}</td>
//         <td className="p-3 border border-gray-300">{user.name}</td>
//         <td className="p-3 border border-gray-300">{user.email}</td>
//         <td className="p-3 border border-gray-300">{user.address.street}</td>
//       </tr>
//       ))}
//     </tbody>
//   </table>
//     </>
//   )
// }

// export default App ;
























// // import { useEffect , useState } from "react";

// import { useEffect, useState } from "react";

// // const App = () => {
// //   let [users , setUsers] = useState([]);

// //   useEffect(() => {
// //     fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json())
// //     .then((users) => {
// //       setUsers(users);
// //     })
// //   } , []);


// //   return (
// //     <>
// //     <h1 className="text-center uppercase">Hello world</h1>
// //     <ul>
// //       {users.map((user) => (
// //         <li key={user.id}>{user.name}</li>
// //       ))}
// //     </ul>
// //     </>
// //   )
// // }

// // export default App ;


// const App = () => {

//   let [users , setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json())
//     .then((data) => {
//       setUsers(data);
//       console.log(data);
//     })
//   } , []);


//   return (
//     <>
//     <h1 className="text-[40px] text-center">Hello Visitor</h1>
// <table className="w-full max-w-xl mx-auto border border-gray-300 border-separate border-spacing-y-2">
//   <thead>
//     <tr className="bg-gray-200">
//       <th className="p-3 text-left border border-gray-300">User Id</th>
//       <th className="p-3 text-left border border-gray-300">User Name</th>
//       <th className="p-3 text-left border border-gray-300">User Email</th>
//     </tr>
//   </thead>

//   <tbody>
//               <td className="p-3 border border-gray-300">{user.id}</td>
//               <td className="p-3 border border-gray-300">{user.name}</td>
//               <td className="p-3 border border-gray-300">{user.email}</td>
//   </tbody>
// </table>

//     </>
//   )
// }
// export default App;


