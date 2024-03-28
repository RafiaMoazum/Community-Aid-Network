import { NavLink } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate=useNavigate();
    return (
        <nav className="NavBar">
            <ul style={{ display: 'flex', alignItems: 'center' }}>
                <li><NavLink to="/" style={{ textDecoration: 'none', color:"black" }}>Home</NavLink></li>
                <li><NavLink to="/login" style={{ textDecoration: 'none' , color:"black"}}>Login</NavLink></li>
                <li><NavLink to="/signUp" style={{ textDecoration: 'none' , color:"black"}}>SignUp</NavLink></li>
            </ul>
            <button onClick= {() => {navigate("/AddCausePage")}}style={{ textDecoration: 'none' , color:"white", backgroundColor:"green" }}>Add a Cause</button>
            <button onClick= {() => {navigate("/AdminPanel")}}style={{ textDecoration: 'none' , color:"white", backgroundColor:"green" }}>Admin</button>

        </nav>
    );
};

export default Header;
