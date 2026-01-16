import { useEffect, useState } from "react";
import Products from "./Products";

const Fetch  = () => {

    const [userData , setUserData] = useState([]);
    const [error , setError] = useState("");

    const FetchProducts = async () => {
        try {

            let dataFromDb = await fetch("https://fakestoreapi.com/products");
            if(!dataFromDb.ok) {console.log("Failed To Fetch Products !")};
            let filterData = await dataFromDb.json();
            console.log(filterData);
            setUserData(filterData);
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        FetchProducts();
    } , []);
    return (
        <>
        <main>
            {userData.map((items , index) => (
                <Products key={index} data={items} />
            ))}
            <p>{error}</p>
        </main>
        </>
    )
}
export default Fetch ;