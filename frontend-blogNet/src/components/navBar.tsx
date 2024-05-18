import { Link } from "react-router-dom";
import InputSearch from "./inputs/inputSearch";

function Navbar() {
  return (
    <nav className="bg-white fixed top-0 h-14 w-full shadow-sm flex justify-around">
      <h1 className="text-blue-800 font-bold mt-3">Login Social</h1>
      <InputSearch />
      <Link to="/profile">
        <img className="h-14" src="./abstract-user.svg" alt="profile-user" />
      </Link>
    </nav>
  )
}

export default Navbar;