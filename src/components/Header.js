import { FiUser } from "react-icons/fi";
import "../Style/Style.css";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h2>Ridomic</h2>
        <FiUser size={30} />
      </header>
      <Outlet/>
    </>
  );
}

export default Header;
