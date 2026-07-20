import { Outlet } from "react-router"
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import Header from "./component/Header"


const RootLayout = () => {
  return (
    <div>
       <Header />
       <NavBar />
       <Outlet />
       <Footer />
    </div>
  )
}

export default RootLayout