import { useNavigate, NavLink } from "react-router";
import { useSelector } from "react-redux";
import Container from "./Container";
import logo from "../assets/Exclusive.png";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();

  // Safely select cart data from Redux store
  const cartData = useSelector((state) => state.shop.cart) || [];
  const favData = useSelector((state) => state.shop.fav) || [];

console.log(cartData)
console.log(favData)

  const handleCartClick = () => {
    navigate("/cartpage");
  };

  const handleHeartClick = () => {
    navigate("/heart");
  };

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Exclusive Logo" />
          </div>

          {/* Navigation Links */}
          <ul className="flex justify-between items-center gap-12 font-poppins text-base">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-pink-500 pb-1" : ""
              }
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-pink-500 pb-1" : ""
              }
            >
              <li>Contact</li>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-pink-500 pb-1" : ""
              }
            >
              <li>About</li>
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-pink-500 pb-1" : ""
              }
            >
              <li>Sign Up</li>
            </NavLink>
          </ul>

          {/* Search & Action Icons */}
          <div className="flex items-center gap-8">
            {/* Search Input */}
            <div className="relative flex items-center">
              <input
                className="bg-[#f4f4f4] w-60 h-9.5 border-0 pl-3 pr-10 rounded outline-none text-sm"
                type="text"
                placeholder="What are you looking for?"
              />
              <CiSearch className="absolute right-3 text-gray-500 text-xl pointer-events-none" />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5">
              {/* Wishlist */}
              <button
                onClick={handleHeartClick}
                className="relative cursor-pointer focus:outline-none"
                aria-label="Wishlist"
              >
                <FaRegHeart className="w-7 h-7" />
                <span className="size-5 bg-red-600 text-white rounded-full flex justify-center items-center absolute -top-2 -right-2 text-xs font-semibold"> {favData.length}</span>
              </button>

              {/* Cart */}
              <button
                onClick={handleCartClick}
                className="relative cursor-pointer focus:outline-none"
                aria-label="Cart">
                <HiOutlineShoppingCart className="w-7 h-7" />
                <span className="size-5 bg-red-600 text-white rounded-full flex justify-center items-center absolute -top-2 -right-2 text-xs font-semibold">
                  {cartData.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
      <hr />
    </div>
  );
};

export default NavBar;