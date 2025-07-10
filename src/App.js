import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Volunteer from './components/Volunteer';
import SignUp from './components/Signup';
import FosterParentDashboard from './components/FosterParentDashboard';
import VolunteerAppointments from './components/VolunteerAppointments'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /><Testimonials /></>} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<FosterParentDashboard />} />
          <Route path="/appointments" element={<VolunteerAppointments />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
