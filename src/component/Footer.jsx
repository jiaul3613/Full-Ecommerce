import Container from "./Container"

const Footer = () => {
  return (
    <div className="bg-black h-110 text-white text-center mt-10 ">
      <Container>
        <div className="flex justify-between items-center pt-35 w-292.5 h-60">
        <div className="h-59 w-54.25 text-left">
  <h2 className="text-[24px] pb-2">Exclusive</h2>
  <h4 className="font-poppins text-[20px] pb-2">Subscribe</h4>
  <p className="text-[14px] pb-2">Get 10% off your first order</p>
  
  {/* Relative wrapper container */}
  <div className="relative w-full">
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="w-full bg-transparent text-white placeholder-gray-500 border border-white rounded py-2 pl-3 pr-10 text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-400"
    />
    {/* Absolute positioned arrow icon */}
    <button 
      type="submit" 
      className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
      aria-label="Subscribe"
    >
      <svg 
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </button>
  </div>
</div>
          <div className="h-59 w-43.75 text-left">
              <h4 className="font-poppins text-[20px] pb-2">Support</h4>
              <p className="text-[14px] pb-1">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
              <p className="text-[14px] pb-1">exclusive@gmail.com</p>
              <p className="text-[14px] pb-1">+88015-88888-9999</p>
          </div>
          <div className="h-59 w-31.25 text-left">
              <h4 className="font-poppins text-[20px] pb-2">Account</h4>
              <ul><li className="text-[14px] pb-1">My Accounts</li></ul>
              <ul><li className="text-[14px] pb-1">Login / Register</li></ul>
              <ul><li className="text-[14px] pb-1">Cart</li></ul>
              <ul><li className="text-[14px] pb-1">Wishlist</li></ul>
              <ul><li className="text-[14px] pb-1">Shop</li></ul>
          </div>
          <div className="h-59 w-31.25 text-left">
              <h4 className="font-poppins text-[20px] pb-2">Quick Link</h4>
              <p className="text-[14px] pb-1">Privacy Policy</p>
              <p className="text-[14px] pb-1">Terms of Use</p>
              <p className="text-[14px] pb-1">FAQ</p>
              <p className="text-[14px] pb-1">Contact</p>
          </div>
          <div className="h-59 w-50 text-left">
              <h4 className="font-poppins text-[20px] pb-2">Download App</h4>
              <p className="text-[12px] pb-1">Save $3 with App New User Only</p>

          </div>
        </div>
       
    </Container>
    <hr className="mt-35 border-gray-700" />
    <p className="mt-5 text-gray-700 font-poppins font-[16px]"> @ Copyright nourish 2026. All right reserved</p>
    </div>
  )
}

export default Footer