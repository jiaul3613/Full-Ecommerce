import { createBrowserRouter } from "react-router";
//import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home"; 
import Contact from "./pages/Contact"
import Root from "./RootLayout"; 
import About from "./pages/About";
import SingUp from "./pages/SingUp";
//import ShopProduct from "./component/ShopProduct";
import Pagination from "./component/Pagination";
import CartPage from "./pages/CartPage";


export const router = createBrowserRouter([
    {
        Component: Root, // Ensure Root is defined or imported
        children: [
          { index: "/", Component: Home },
          {path: "/contact", Component: Contact},
          {path: "/about", Component: About},
          {path: "/singup", Component: SingUp},
          {path: "/product", Component: Pagination},
          {path: "/cartpage", Component: CartPage},
        ],
      },
]);
