import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact, Hero, Navbar, ParticleEffect } from './components';
import { Home, Project } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative bg-ltc-1 dark:bg-dtc-1'>
        <ParticleEffect />
        <header className='relative z-10'>
          <div className="relative bg-hero-pattern bg-cover bg-fixed bg-center">
            <Navbar />
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </main>

        <footer className='relative z-0 bg-ltc-4 dark:bg-dtc-4'>
          <Contact />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
