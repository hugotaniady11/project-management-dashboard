import React from 'react'
import Design from "./Design.js"
import Header from "./Header.js"
import ContentMainHome from './ContentMainHome.js'

const HomeMain = () => {
  
  return (
    
    <div className="w-full h-screen bg-black relative overflow-hidden ">

        <div className="max-w-6xl mx-auto">
        <Header/>  
        </div> 
        <div className="w-full flex justify-center items-center h-screen">
        <ContentMainHome/>
        </div>

        <div className="w-full h-screen absolute top-0 left-0 ">
          <Design/>
        </div>
    </div>

    
  )
}

export default HomeMain;
