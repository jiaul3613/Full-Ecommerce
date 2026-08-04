import Container from './Container';
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-black text-white"> 
      
      <Container >
       <div className="flex justify-between items-center py-2">
        <div></div>
          <p className='font-poppins font-[14px]'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
            <NavLink to="/product"> <span className="font-semibold underline ml-4 cursor-pointer">ShopNow</span></NavLink>
          </p>
        
          <select  className='bg-black text-white font-poppins font-[14px]'>
            <option value="English">English</option>
            <option value="Bangla">Bangla</option>
          </select>
        </div>
      </Container>
    </div>
  )
}

export default Header;