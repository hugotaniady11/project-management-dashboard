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
import { Header, Footer } from '../../components'

const MainApp = () => {
  return (
    <div>
        <Header />
            <Routes>
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/members" element={<Members />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/" element={<Home />} />
            </Routes>
              <Footer />
    </div>
  )
}

export default MainApp
