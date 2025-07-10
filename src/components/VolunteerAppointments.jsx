import React from 'react';
import { Link } from 'react-router-dom';
import './VolunteerAppointments.css';

function VolunteerAppointments() {
  return (
    <div className="volunteer-appointments">
      <div className="header">
        <h2>Browse Hair Appointments</h2>
        <div className="header-links">
          <Link to="/volunteer/signup">Back</Link>
          <Link to="/volunteer/profile">Profile</Link>
        </div>
      </div>

      <section>
        <h3>Available Appointments</h3>
        <div className="appointment-list">
          <div className="appointment-item">
            <img src="/calendar-icon.png" alt="calendar" />
            <div>
              <strong>Braids for Jamila</strong>
              <p>Location: Brooklyn Foster Agency</p>
            </div>
            <div className="datetime">
              <p><strong>Date:</strong> July 18, 2025</p>
              <p><strong>Time:</strong> 2:00 PM</p>
            </div>
          </div>

          <div className="appointment-item">
            <img src="/calendar-icon.png" alt="calendar" />
            <div>
              <strong>Curl Set for Myles</strong>
              <p>Location: Home Visit – Bronx</p>
            </div>
            <div className="datetime">
              <p><strong>Date:</strong> July 20, 2025</p>
              <p><strong>Time:</strong> 11:00 AM</p>
            </div>
          </div>

          <div className="appointment-item">
            <img src="/calendar-icon.png" alt="calendar" />
            <div>
              <strong>Wash & Detangle for Zoe</strong>
              <p>Location: Manhattan Youth Center</p>
            </div>
            <div className="datetime">
              <p><strong>Date:</strong> July 22, 2025</p>
              <p><strong>Time:</strong> 3:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3>My Upcoming Appointments</h3>
        <div className="appointment-list">
          <div className="appointment-item">
            <img src="/calendar-icon.png" alt="calendar" />
            <div>
              <strong>Twist Out for Isaiah</strong>
              <p>Date & Time: July 15, 2025 @ 1:00 PM</p>
            </div>
            <p><strong>Child’s ID:</strong> #C872</p>
          </div>

          <div className="appointment-item">
            <img src="/calendar-icon.png" alt="calendar" />
            <div>
              <strong>Protective Style for Layla</strong>
              <p>Date & Time: July 16, 2025 @ 10:00 AM</p>
            </div>
            <p><strong>Child’s ID:</strong> #B223</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Contact Us</p>
      </footer>
    </div>
  );
}

export default VolunteerAppointments;
