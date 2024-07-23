// Import the functions you need from react and react file
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar"> 
            <div className="links">
                <Link to="/login"> Login </Link> 
            </div>
        </div> 
    );
};