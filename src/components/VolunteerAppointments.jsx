import React from 'react';
import './VolunteerAppointments.css';

function VolunteerAppointments() {
  return (
    <div className="volunteer-appointments">
      <div className="header">
        <h2>Browse Appointments</h2>
        <div className="header-links">
          <a href="#">Back</a>
          <a href="#">Profile</a>
        </div>
      </div>

      <section>
        <h3>Available Appointments</h3>
        <div className="appointment-list">
          <div className="appointment-item">
            <img src="/calendar-icon.png" alt="calendar" />
            <div>
              <strong>Appointment with Dr. Smith</strong>
              <p>Location: City Clinic</p>
            </div>
            <div className="datetime">
              <p><strong>Date:</strong> 10th Oct, 2023</p>
              <p><strong>Time:</strong> 10:00 AM</p>
            </div>
          </div>
          <div className="appointment-item">
            <img src="/calendar-icon.png" alt="calendar" />
            <div>
              <strong>Appointment with Dr. Johnson</strong>
              <p>Location: Downtown Med Center</p>
            </div>
            <div className="datetime">
              <p><strong>Date:</strong> 11th Oct, 2023</p>
              <p><strong>Time:</strong> 2:00 PM</p>
            </div>
          </div>
          <div className="appointment-item">
            <img src="/calendar-icon.png" alt="calendar" />
            <div>
              <strong>Appointment with Dr. Lee</strong>
              <p>Location: Health Hub</p>
            </div>
            <div className="datetime">
              <p><strong>Date:</strong> 12th Oct, 2023</p>
              <p><strong>Time:</strong> 1:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3>Upcoming Appointments</h3>
        <div className="appointment-list">
          <div className="appointment-item">
            <img src="/calendar-icon.png" alt="calendar" />
            <div>
              <strong>Appointment 1</strong>
              <p>Date & Time: 10/05/2023 10:00 AM</p>
            </div>
            <p><strong>Child’s ID:</strong> A123</p>
          </div>
          <div className="appointment-item">
            <img src="/calendar-icon.png" alt="calendar" />
            <div>
              <strong>Appointment 2</strong>
              <p>Date & Time: 10/06/2023 2:00 PM</p>
            </div>
            <p><strong>Child’s ID:</strong> B456</p>
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
