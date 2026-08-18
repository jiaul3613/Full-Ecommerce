import { Outlet } from "react-router"
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import Header from "./component/Header"
import { ToastContainer } from 'react-toastify';


const RootLayout = () => {
  return (
    <div>
       <Header />
       <ToastContainer/>
       <NavBar />
       <Outlet />
       <Footer />
    </div>
  )
}

export default RootLayout