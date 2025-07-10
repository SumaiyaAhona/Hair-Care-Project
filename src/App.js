import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Volunteer from './components/Volunteer';
import Footer from './components/Footer';
import HelpCenter from './components/HelpCenter';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Testimonials />
              
            </>
          } />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/help" element={<HelpCenter />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
