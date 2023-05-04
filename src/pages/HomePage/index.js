import React from 'react'
import KECLogo from "../../assets/KEC Logo - Blue 2.png";
import { Input, Button } from '../../components';
import { useNavigate } from "react-router-dom";
import SliderHomePage from '../../assets/Home Page 1_1.mp4';



const HomePage = () => {
  const navigate = useNavigate();
  
  function handleNavigateSolution(){
    const solution = navigate("/register");
  }

  function handleNavigateContactus(){
    const contact = navigate("/register");
  }

    const VideoJS = () => {
      const videoSrc = SliderHomePage;
    
    }


  return (

    <section class="bg-white">
      <div class="bg-gradient-to-b from-kec-blue to-white h-4000px">
          <div class="container px-8 py-10 mx-auto">
            <nav class="flex gap-5 justify-between">
            <img src={KECLogo} alt="KecLogo"/>
              <ul class="flex gap-10 text-center">
                <li class="list-none inline-block"> <a href="#" class="no-underline text-white">About</a></li>
                <li class="list-none inline-block"><a href="#" class="no-underline text-white">Service </a></li>
                <li class="list-none inline-block"><a href="#" class="no-underline text-white">Our Work </a></li>
                <li class="list-none inline-block"><a href="#" class="no-underline text-white">Contact US </a></li>
              </ul>
            </nav>

            <div class="flex flex-col gap-5 items-left justify-center" >
                <h1 class="text-7xl text-white leading-tight text-left p-4 max-w-6xl">KEWO ENGINEERING</h1> 
                <p>
                Delivering world-class engineering solutions.
                </p>
            </div>

            <div class="flex gap-4 items-center pl-4 z-40">
                <Button onClick={handleNavigateSolution} id="submit" title="Solution"/>
                <Button onClick={handleNavigateContactus} id="submit" title="Contact Us"/>
            </div>
          </div>
          </div>

            
            <div class="p-20px">
            <video src={SliderHomePage} class="block mx-auto max-w-5xl float-center" autoPlay controls/>
            </div>


            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-300 h-full">
                <img>
                
                </img>
              
              </div>
              <div class="bg-gray-400 h-full">

                <h1>ABOUT US</h1>
                <p>Kewo Engineering is a multidisciplinary engineering 
                  design and consulting firm, specializing in Electric 
                  Power related engineering services for electric utilities, 
                  public agencies, and private companies worldwide.</p>
              </div>
            </div>


            <div class="flex flex-nowrap justify-center">
              <div>01</div>
              <div>02</div>
              <div>03</div>
            </div>


            <div>
              <h1>SERVICES</h1>
              <p>Our lean team of multidisciplinary engineers are committed to provide you with 
                responsive support and world-class engineering solutions.</p>

                <div class="flex flex-nowrap justify-center">
                  <div class="box-border h-32 w-32 p-4 border-4">01</div>
                  <div class="box-border h-32 w-32 p-4 border-4">02</div>
                  <div class="box-border h-32 w-32 p-4 border-4">03</div>
                  <div class="box-border h-32 w-32 p-4 border-4">04</div>
                  <div class="box-border h-32 w-32 p-4 border-4">05</div>
                </div>
            </div>

            <div>
            <h1>RECENT PROJECTS</h1>
            <div class="flex justify-center items-center grid grid-cols-3 gap-4">
                <div class="col-start-1 col-end-4 ...">01</div>
                <div class="">02</div>
                <div class="">03</div>
                <div class="">04</div>
            </div>
            </div>

            <div>
              <h1>CLIENTS</h1>
            </div>




            



      
    </section>

  )
}

export default HomePage
