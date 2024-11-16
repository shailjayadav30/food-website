import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <nav className="flex justify-between pl-4 pr-4 h-[6rem] items-center">
        <Link to="/">
          <a className="text-2xl">Foodio</a>
        </Link>
        <ul className="flex items-center gap-5 pt-2">
          <Link to="/">
            <li>Home</li>
          </Link>
          <ScrollLink
            to="menu-section"
            smooth={true}
            duration={500}
            offset={-80} // Adjust for the navbar height
            className="cursor-pointer"
          >
            <li>Menu</li>
          </ScrollLink>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="">
            <li className="pt-1">
              <FiShoppingCart />
            </li>
          </Link>
          <Link to="/login">
            <button
              className="rounded-[16px] min-w-[7.00rem] sm:px-[1.25rem] px-[2.13rem] font-semibold flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap h-[3.13rem] text-[0.88rem] bg-[#f54748] text-[#ffffff]"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
