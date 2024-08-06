import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Nav from "./assets/components/Navbar/Nav";
import Left from "./assets/components/LeftSide/Left";
import Footer from "./assets/components/Footer/Footer";
import Home from "./assets/pages/Home/Home";
import User from "./assets/components/Users/User";
import Product from "./assets/pages/product/Product";
import Login from "./assets/pages/Login/Login";
import Register from "./assets/pages/Register/Register";
import "./style/global.scss";
export default function App() {
  const Layout = () => {
    return(
        <div className="main">
            <Nav />
            
           <div className="display" style={{display:"flex"}}>
              <Left />
             <div className="" style={{flex:"10"}}>
              <Outlet />
             </div>
             
           </div>

          <Footer />
        </div>
    );
  }

  const router = createBrowserRouter ([
    {
      path : "/",
      element : <Layout />,
      children : [
        {
          path : "/",
          element : <Home />
        },
        {
          path : "/user",
          element : <User />
        },
        {
          path : "/product",
          element : <Product />
        }
      ]
    },
    {
      path : "/login",
      element : <Login />
    },
    {
      path : "register",
      element : <Register />
    }
  ])
  return <RouterProvider router={router} />
}
