import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Projects from '../Projects'
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
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className="container mx-auto ">
      <Header />
        
        <Routes>
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/projects" element={<Projects />} />
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
