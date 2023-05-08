import React from 'react'
import KECLogo from "../../assets/KEC Logo - Blue 2.png";
import { Input, Button } from '../../components';
import { useNavigate } from "react-router-dom";
import SliderHomePage from '../../assets/Home Page 1_1.mp4';

const Home2 = () => {
  const navigate = useNavigate();

  function handleNavigateSolution() {
    const solution = navigate("/register");
  }

  function handleNavigateContactus() {
    const contact = navigate("/register");
  }

  const VideoJS = () => {
    const videoSrc = SliderHomePage;

  }

  return (
    <section className="bg-white">
      <div className="bg-gradient-to-b from-kec-blue to-white h-4000px">
        <div className="container px-8 py-10 mx-auto">
          <nav className="flex gap-5 justify-between">
            <img src={KECLogo} alt="KecLogo"/>
            <ul className="flex gap-10 text-center">
              <li className="list-none inline-block"> <a href="#" className="no-underline text-white">About</a></li>
              <li className="list-none inline-block"><a href="#" className="no-underline text-white">Service </a></li>
              <li className="list-none inline-block"><a href="#" className="no-underline text-white">Our Work </a></li>
              <li className="list-none inline-block"><a href="#" className="no-underline text-white">Contact US </a></li>
            </ul>
          </nav>

          <div className="flex flex-col gap-5 items-left justify-center" >
            <h1 className="text-7xl text-white leading-tight text-left p-4 max-w-6xl">KEWO ENGINEERING</h1>
            <p>
              Delivering world-class engineering solutions.
            </p>
          </div>

          <div className="flex gap-4 items-center pl-4 z-40">
            <Button onClick={handleNavigateSolution} id="submit" title="Solution" />
            <Button onClick={handleNavigateContactus} id="submit" title="Contact Us" />
          </div>
        </div>
      </div>

      <div className="p-20px">
        <video src={SliderHomePage} class="block mx-auto max-w-5xl float-center" autoPlay controls/>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-300 h-full">
          <img>

          </img>
        </div>
        <div className="bg-gray-400 h-full">

          <h1>ABOUT US</h1>
          <p>Kewo Engineering is a multidisciplinary engineering
            design and consulting firm, specializing in Electric
            Power related engineering services for electric utilities,
            public agencies, and private companies worldwide.</p>
        </div>
      </div>


      <div className="flex flex-nowrap justify-center">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>

      <div>
        <h1>SERVICES</h1>
        <p>Our lean team of multidisciplinary engineers are committed to provide you with
          responsive support and world-class engineering solutions.</p>

        <div className="flex flex-nowrap justify-center">
          <div className="box-border h-32 w-32 p-4 border-4">01</div>
          <div className="box-border h-32 w-32 p-4 border-4">02</div>
          <div className="box-border h-32 w-32 p-4 border-4">03</div>
          <div className="box-border h-32 w-32 p-4 border-4">04</div>
          <div className="box-border h-32 w-32 p-4 border-4">05</div>
        </div>
      </div>
      <div>

        <h1>RECENT PROJECTS</h1>
        <div className="flex justify-center items-center grid grid-cols-3 gap-4">
          <div className="col-start-1 col-end-4 ...">01</div>
          <div className="">02</div>
          <div className="">03</div>
          <div className="">04</div>
        </div>
      </div>

      <div>
        <h1>CLIENTS</h1>
      </div>
    </section>
  )
}

export default Home2
