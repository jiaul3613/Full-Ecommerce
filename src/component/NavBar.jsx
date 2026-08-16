import { useState } from "react";
import Container from "./Container"
import logo from '../assets/Exclusive.png'
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";


const NavBar = () => {
  const [menu,setMenu]=useState('home')

  const navigate = useNavigate();
  
  const haldcallCart=()=>{
    navigate('/cartpage');
  }

  //const data = useSelector((state) => state.Products.Cart);

  const data = useSelector((state) => state.cart.Cart);
  

  //console.log(data);

  return (
    <div >
      <Container>
        <div className="flex justify-between items-center py-4">
          <div><img src={logo} alt="" /></div>
          <ul className="flex justify-between items-center gap-12 font-poppins font-[16px]">
          <NavLink to="/"><li onClick={()=>{setMenu('home')}}>Home</li> {menu==='home' ? <hr className="border-pink-500  mt-1" /> : <></>} </NavLink>
          <NavLink to="/contact"><li onClick={()=>{setMenu('contact')}}>Contact</li> {menu==='contact' ? <hr className="border-pink-500  mt-1" /> : <></>} </NavLink>
          <NavLink to="/about"><li onClick={()=>{setMenu('about')}}>About</li> {menu==='about' ? <hr className="border-pink-500  mt-1" /> : <></>} </NavLink>
          <NavLink to="/singup"><li onClick={()=>{setMenu('singup')}}>Sing Up</li> {menu==='singup' ? <hr className="border-pink-500  mt-1" /> : <></>}</NavLink>
          </ul>
          <div className="flex items-center gap-8">
              <div className="relative flex items-center">
                  <input 
                    className="bg-[#f4f4f4] w-59.5 h-9.5 border-0 pl-3 pr-10 rounded" type="text" 
                    placeholder="What are you looking for?"/> 
                  <CiSearch className="absolute right-3 text-gray-500 pointer-events-none" />
              </div>

              <div className="flex items-center gap-5">
                <FaRegHeart className="w-8 h-8" />
                <div  onClick={haldcallCart}  className="relative ">
                  <HiOutlineShoppingCart className="w-8 h-8" />
                  <div className="size-6 bg-red-700 text-white rounded-full flex justify-center items-center absolute -top-4 -right-4 text-xs">{data.length}</div>
                </div>
              </div>
          </div>
        </div>
        
      </Container>
      <hr/>
    </div>
  )
}

export default NavBar