import React from "react";
import logo from "../Images/logo.png"

const Header =()=>{
    return(
        <>
          <div className="header">
            <img src={logo} alt="logo"  width="60px" height={"50px"}/>
            <h1>Coder Anshu</h1>
          </div>
          
        
        </>
    );
};
export default Header;