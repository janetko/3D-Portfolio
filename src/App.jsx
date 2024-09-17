import { BrowserRouter, Route, Routes } from "react-router-dom";
import {About, Contact, Experience, FunFacts, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import NotFound from "./components/NotFound";


const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route 
          path='/'
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <About />
              <FunFacts />
              <Experience />
              <Tech />
              <Works />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>

            </div>
          }
        />  
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
