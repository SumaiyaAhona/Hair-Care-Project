import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Volunteer from './components/Volunteer';
import SignUp from './components/Signup'; 
import FosterParentDashboard from './components/FosterParentDashboard';



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
          <Route path="/signup" element={<SignUp />} />   {/* ← new route */}
          <Route path="/dashboard" element={<FosterParentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
