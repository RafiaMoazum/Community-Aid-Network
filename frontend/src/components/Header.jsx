import { NavLink } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate=useNavigate();
    return (
      <div>
        <p class="text">Whoever removes a worldly grief from a believer, 
        Allah will remove from him one of the griefs of the Day of Resurrection. (Sahi Muslim)</p>
      </div>
    );
};

export default Header;
