import React, { useState, useEffect, useNavigate } from 'react'
import { Routes, Route } from 'react-router-dom'
import Projects from '../Projects'
import ProjectId from '../Projects/[id]'
import Tasks from '../Tasks'
import Home from '../Home'
import Analytics from '../Analytics'
import Expenses from '../Expenses'
import Invoices from '../Invoices'
import Resources from '../Resources'
import Members from '../Members';
import MemberDetail from '../Members/[id]'
import NotFound from '../404';
import { Header, Footer, Sidebar } from '../../components'


const MainApp = () => {
  
  const [user, setUser] = useState(null);

  return (
    <>
    <Header />
    <div className='flex pt-16 overflow-hidden bg-gray-50'>
      <Sidebar />
      <div className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-8 ">
        <Routes>
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectId />} />
            <Route path="/members" element={<Members />} />
            <Route path="/members/:id" element={<MemberDetail />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
          <Footer />
      </div>
    </div>
    </>
  )
}

export default MainApp
