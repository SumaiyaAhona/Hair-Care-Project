import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Volunteer from './components/Volunteer';
import SignUp from './components/Signup';
import FosterParentDashboard from './components/FosterParentDashboard';
import FosterProfile from './components/FosterProfile';
import VolunteerAppointments from './components/VolunteerAppointments';
import VolunteerProfile from './components/VolunteerProfile';
import FosterSignup from './components/FosterSignup';
import HelpCenter from './components/HelpCenter';
import ContactPage from './components/ContactPage';
import Login from './components/Login';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Testimonials />
              </>
            }
          />
          <Route path="/volunteer/signup" element={<Volunteer />} />
          <Route path="/signup/agency" element={<FosterSignup />} />
          <Route path="/general/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/foster/dashboard" element={<FosterParentDashboard />} />
          <Route path="/foster/profile" element={<FosterProfile />} />
          <Route path="/volunteer/appointments" element={<VolunteerAppointments />} />
          <Route path="/volunteer/profile" element={<VolunteerProfile />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/helpcenter" element={<HelpCenter/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
