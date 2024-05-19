import { Link } from "react-router-dom";
import InputSearch from "./inputs/inputSearch";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

function Navbar() {
  const { user } = useContext(GlobalContext);
  return (
    <nav className="shadow-xl bg-white fixed top-0 h-14 w-full flex justify-around">
      <h1 className="text-blue-800 font-bold mt-3">Login Social</h1>
      <InputSearch />
      <Link to="/profile">
        <img className="h-12" src="./abstract-user.svg" alt="profile-user" />
      </Link>
    </nav>
  )
}

export default Navbar;