import React from "react";
import logo from "../Components/Assets/logo.jpeg";
import "../styles/NavBar.css";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navi = useNavigate();
  return (
    <div className="text-fontclr">
      <div className="flex justify-around  gap-96 py-4 items-center">
        <div onClick={()=>{
          navi("/")
        }}>
          <img src={logo} alt="Logo" className="w-20" />
        </div>
        <Link to="/login" className="text-lg cursor-pointer">
          LogIn
        </Link>
      </div>
      <hr></hr>
    </div>
  );
};

export default NavBar;
