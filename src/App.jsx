import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import Experience from './Components/Experience';
import Sidebar from './Components/Sidebar';
import Button6 from './Components/Button6';

const App = () => {
  return (
    <div className='mx-6 md:mx-24'>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Footer/>
      <Sidebar/>
    </div>
  )
}

export default App