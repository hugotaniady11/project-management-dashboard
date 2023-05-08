import React from "react";
import KECLogo from "../../assets/KEC Logo - Blue 2.png";

const Header = () => {
    return (
    <div className="max-w-xs text-white py-10"> 
        <div className="z-40">
            <img src={KECLogo} alt="KecLogo"/>
        {/* <h1 className="text-white font-bold uppercase text-2xl">Kewo Engineering</h1> */}
        </div>
        
       

    </div>
    )
    
};

export default Header;
