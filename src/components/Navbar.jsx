import { Link } from "react-router";
import logo from "../assets/logo-1.png";

export default function Navbar() {
  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/about" },
    { name: "Work", path: "/about" },
    { name: "Contact", path: "/about" },
  ];
  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-black/30 z-10">
      <div className="  flex justify-between items-center gap-10 text-white px-80">
        {/* Logo */}
        <Link to="/" className="text-white">
          <img src={logo} alt="logo" className=" w-20 h-20" />
        </Link>

        {/* Menu */}
        <ul className="flex gap-10 ">
          {menus.map((menu) => (
            <li key={menu.name} className="hover:font-bold transition-all">
              <Link to={menu.path}> {menu.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
