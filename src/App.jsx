import React from 'react';
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import { Contact, Navbar, ParticleEffect } from './components';
import { Home, Project } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative bg-ltc-1 dark:bg-dtc-1'>
        <ParticleEffect />
        <header className='relative z-10'>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>

        <footer className='relative z-0 bg-ltc-4 dark:bg-dtc-4'>
          <Contact />
        </footer>
      </div >
    </BrowserRouter >
  )
}

export default App
