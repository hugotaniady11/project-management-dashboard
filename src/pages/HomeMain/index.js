import React from 'react'
import Design from "./Design.js"
import Header from "./Header.js"
import ContentMainHome from '/Users/aksara/Desktop/project-management-dashboard/src/pages/HomeMain/ContentMainHome.js'

const HomeMain = () => {
  
  return (
    
    <div class="w-full h-screen bg-black relative overflow-hidden ">

        <div class="max-w-6xl mx-auto">
        <Header/>  
        </div> 
        <div class="w-full flex justify-center items-center h-screen">
        <ContentMainHome/>
        </div>

        <div class="w-full h-screen absolute top-0 left-0 ">
          <Design/>
        </div>
    </div>

    
  )
}

export default HomeMain;
