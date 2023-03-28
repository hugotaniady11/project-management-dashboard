import React from "react";
import Button from '/Users/aksara/Desktop/project-management-dashboard/src/components/atoms/Button/index.js';
import Sertification from '/Users/aksara/Desktop/project-management-dashboard/src/assets/Sertifikat.png';
import { useNavigate } from "react-router-dom";

const ContentMainHome = () => {
  const navigate = useNavigate();
  
  function handleNavigateSolution(){
    const solution = navigate("/register");
  }

  function handleNavigateContactus(){
    const contact = navigate("/register");
  }

    return (
        <div class="flex justify-center items-center w-full">
          <div class="flex flex-col gap-5 items-left" >
            <h1 class="text-6xl text-white leading-tight text-left p-4 max-w-6xl">
                All aspects of our service 
                have been specifically designed 
                to deliver the best solutions 
                that you deserve.
                </h1>
                <div class="flex gap-4 items-center pl-4 z-40">
                <Button onClick={handleNavigateSolution} id="submit" title="Solution"/>
                <Button onClick={handleNavigateContactus} id="submit" title="Contact Us"/>
                </div>
                <div class="grid grid-cols-6 gap-6">

                <img src={Sertification} alt="Sertification" class="py-28 max-w-xs col-end-7 col-span-2 ..."/>
                </div>
          </div>
        </div>
    )
}

export default ContentMainHome