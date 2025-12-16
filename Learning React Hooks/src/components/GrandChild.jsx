
import { useContext } from "react";
import { UserContext } from "./context/Context";

function GrandChild () {
    let message = useContext(UserContext)
    return (
        <>
        <h1>Hello From Grand Child {message}</h1>
        </>
    )
}
export default GrandChild ;