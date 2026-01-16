import { Link } from "react-router-dom";

function Nav ({path , msg}) {
    return (
        <Link className="text-[35px] italic uppercase font-bold underline" to={path}>{msg}
        </Link>
    )
}
export default Nav ;