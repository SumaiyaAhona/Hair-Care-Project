import './FosterParentDashboard.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function FosterParentDashboard() {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([
    { child: 'Child 2', service: 'Curl Set', status: 'Pending volunteer match' },
    { child: 'Child 3', service: 'Braid', status: 'Confirmed' },
  ]);

  const [formData, setFormData] = useState({
    child: 'Child 1',
    service: 'Braiding',
    datetime: '',
    location: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      child: formData.child,
      service: formData.service,
      status: 'Pending volunteer match'
    };
    setAppointments(prev => [...prev, newAppointment]);
    setFormData({
      child: 'Child 1',
      service: 'Braiding',
      datetime: '',
      location: '',
      notes: ''
    });
  };

  const handleBack = () => {
    navigate('/login');
  };

  const handleProfile = () => {
    navigate('/foster/profile');
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome, [Foster Parent Name]</h1>
        <p>Manage appointments and services for children in care.</p>
        <div className="dashboard-buttons">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleProfile}>Profile</button>
        </div>
      </header>

      <section className="children-section">
        <h2>Children in Care</h2>
        <p>Overview of children under your care</p>
        <div className="children-cards">
          <div className="child-card confirmed">Child 1<br />Age: 8, Curly<br />Recent: Curl Set</div>
          <div className="child-card pending">Child 2<br />Age: 10, Straight<br />Recent: None</div>
          <div className="child-card confirmed">Child 3<br />Age: 15, Coily<br />Recent: Braid</div>
        </div>
      </section>

      <section className="appointment-form">
        <h2>Book New Appointment</h2>
        <form onSubmit={handleSubmit}>
          <select name="child" value={formData.child} onChange={handleChange}>
            <option>Child 1</option>
            <option>Child 2</option>
            <option>Child 3</option>
          </select>
          <select name="service" value={formData.service} onChange={handleChange}>
            <option>Braiding</option>
            <option>Curl Set</option>
            <option>Hair Wash</option>
            <option>Twist Out</option>
          </select>
          <input
            name="datetime"
            type="datetime-local"
            value={formData.datetime}
            onChange={handleChange}
            required
          />
          <input
            name="location"
            type="text"
            placeholder="Home, Agency, Salon"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <input
            name="notes"
            type="text"
            placeholder="e.g., prefers tight braids"
            value={formData.notes}
            onChange={handleChange}
          />
          <button type="submit">Submit Appointment</button>
        </form>
      </section>

      <section className="upcoming-appointments">
        <h2>Upcoming Appointments</h2>
        {appointments.map((appt, idx) => (
          <div key={idx}>
            {appt.child} – {appt.service} – <strong>Status: {appt.status}</strong>
          </div>
        ))}
      </section>

      <section className="past-appointments">
        <h2>Past Appointments</h2>
        <div>Child 1 – Curl Set – <em>Liked the outcome! Would recommend.</em></div>
        <div>Child 3 – Braids – <em>Prefers looser styles.</em></div>
      </section>
    </div>
  );
}
