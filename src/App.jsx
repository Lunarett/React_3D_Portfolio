import React, { useRef, useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Qualification, Tech, ParticleEffect } from './components';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative bg-primary'>
        <ParticleEffect />
        <div className='relative'>
          <Header className='z-50' />

          <main>
            <About />
            <Experience />
            <Qualification />
            <Tech />
          </main>

          <footer className='relative z-0 bg-gray-300'>
            <Contact />
          </footer>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
