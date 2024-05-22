import React from "react";
import Login from "./Components/LoginSignup/Login";
import NavBar from "./Components/Navbar";
import Title from "./Components/Title";
import ProductDes from "./Components/ProductDes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Components/LoginSignup/Register";
import Home from "./Components/Home";
import ProductPage from "./Components/Productpage";
import Productcard from "./Components/Productcard";
import Products from "./Components/Carousle";
import ProductSection from "./Components/ProductsSection";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <NavBar/>
      <ProductSection/>
      </>,
    },
    {
      path: "/productdes",
      element: (
        <>
          <NavBar />
          <ProductDes />
        </>
      ),
    },
    {
      path: "/login",
      element: <>
      <NavBar/>
      <Login />
      </>,
    },
    {
      path: "/register",
      element: <>
      <NavBar/>
      <Register />
      </>,
    },
    {
      path: "/home",
      element: (
        <>
          <NavBar />
          <ProductSection/>
          
        </>
      ),
    },
    {
      path: "/productpage",
      element: <>
      <NavBar/>
      <ProductPage/>
      </>,
    },
    {
      path: "/productcard",
      element: <>
      <NavBar/>
      <Productcard/>
      </>,
    },
    {
      path: "/productssection",
      element: <>
      <NavBar/>
      <ProductSection/>
      </>,
    },
 
 

  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
