import React, { useRef, useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Qualification, Tech, ParticleEffect, ThemeToggle, ThemeProvider } from './components';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
        <div className='relative bg-ltc-1 dark:bg-dtc-1'>
          <ParticleEffect />
          <Header className='z-50' />

          <main>
            <About />
            <Experience />
            <Qualification />
            <Tech />
          </main>

          <footer className='relative z-0 bg-ltc-4 dark:bg-dtc-4'>
            <Contact />
          </footer>
        </div>
    </BrowserRouter>
  )
}

export default App
