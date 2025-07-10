import React from 'react';
import './FosterProfile.css';

const FosterProfile = () => {
  return (
    <div className="foster-profile-container">
      <header className="profile-header">
        <h2>Agency Profile</h2>
        <p>Manage your agency’s details and appointments</p>
      </header>

      <section className="agency-info">
        <div className="agency-avatar"></div>
        <div>
          <h3>Foster Care Agency Name</h3>
          <p>Caseworker: John Doe</p>
        </div>
      </section>

      <section className="contact-info">
        <h3>Contact Information</h3>
        <div className="contact-cards">
          <div className="contact-card">
            <p className="label">Email Address</p>
            <p>contact@fosteragency.com</p>
            <span className="edit-icon">✏️</span>
          </div>
          <div className="contact-card">
            <p className="label">Phone Number</p>
            <p>(123) 456-7890</p>
            <span className="edit-icon">✏️</span>
          </div>
        </div>
      </section>

      <section className="past-appointments">
        <h3>Past Appointments</h3>
        <div className="appointment-card">
          <div className="icon">🧒</div>
          <div>
            <p><strong>Child: A.B.</strong></p>
            <p className="service">Service received: Haircut</p>
          </div>
          <p className="date">Date completed: 2023-09-15</p>
        </div>
        <div className="appointment-card">
          <div className="icon">🧒</div>
          <div>
            <p><strong>Child: C.D.</strong></p>
            <p className="service">Service received: Hair Braiding</p>
          </div>
          <p className="date">Date completed: 2023-08-20</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2023 Hair for Those in Care. All rights reserved.</p>
        <p>Contact support at: support@hairforthoseincare.com</p>
      </footer>
    </div>
  );
};

export default FosterProfile;
