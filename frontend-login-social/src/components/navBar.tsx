import { Link, useNavigate } from "react-router-dom";
import InputSearch from "./inputs/inputSearch";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import LogOutSvg from "./SVGs/LogOutSvg";
import AbstractUser from "./SVGs/AbstractUser";

function Navbar() {
  const { user } = useContext(GlobalContext);
  const navigate = useNavigate();
  const imageExists = user.image === null || user.image === '' || user.image === undefined;

  const clickLogOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="z-20 shadow-xl bg-white fixed top-0 h-14 w-full flex justify-around">
      <Link to="/home">
        <h1 className="ml-3 text-blue-800 font-bold mt-2">Login Social</h1>
      </Link>
      <InputSearch />
      <div className="flex flex-row gap-3 mt-3">
        <Link to="/profile">
          {imageExists ? <AbstractUser /> : <img className="h-8 w-8 rounded-full" src={user.image} alt="user" />}
        </Link>
        <button
          onClick={clickLogOut}
          className="h-8 w-8 active:scale-75 transition-all duration-100">
          <LogOutSvg />
        </button>
      </div>
    </nav>
  )
}

export default Navbar;