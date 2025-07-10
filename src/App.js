import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Volunteer from './components/Volunteer';
import SignUp from './components/Signup'; 



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
              <ContactForm />
            </>
          } />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/signup" element={<SignUp />} />   {/* ← new route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
