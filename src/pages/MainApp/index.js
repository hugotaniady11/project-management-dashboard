import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Projects from '../Projects'
import Tasks from '../Tasks'
import Home from '../Home'
import Analytics from '../Analytics'
import Expenses from '../Expenses'
import Invoices from '../Invoices'
import Resources from '../Resources'

const MainApp = () => {
  return (
    <div>
        <p>Header</p>
            <Routes>
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/" element={<Home />} />
            </Routes>
        <p>Footer</p>
    </div>
  )
}

export default MainApp
