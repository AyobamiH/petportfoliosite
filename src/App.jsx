import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/PetSitters/Home'
import GlobalSound from './components/PetSitters/GlobalSound'
import React from 'react'

import PortfolioSection from './components/PetSitters/PortfolioSection'
const App = () => {
  

  return (
    <>
    <GlobalSound/>
      <Router>
       
        <Routes>
         
          
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
          {/* <Route path="/some-path" element={<SomeComponent />} /> */}
        </Routes>
      </Router>

    </>
  )
}

export default App
