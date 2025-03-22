import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Nav/Navbar'
import Home from './Home/Home';
import Skills from './Home/Skills';

import Contact from './Contact/Contact';
import Register from './Register/Register';
import Report from './Report/Report';
import Certificate from './Home/Certificate';
import Experience from './Home/Experience';
import About from './Home/About';

const App =()=> {
  return (
    <div className="bg-white ">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={
        <>
            <Home />
            <Certificate/>
            <Skills/>
            <Experience/>
            
      </>
      } />
      {/* <Route path="/skills" element={<Skills />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/report" element={<Report />} />
      <Route path='/certificate' element={<Certificate/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/experience' element={<Experience/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
