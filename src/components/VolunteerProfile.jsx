import './VolunteerProfile.css';

function VolunteerProfile() {
  return (
    <div className="volunteer-profile-container">
      <header className="profile-header">
        <h2>Profile</h2>
        <div className="nav-buttons">
          <button>Back</button>
        </div>
      </header>

      <section className="profile-section">
        <div className="profile-overview">
          <div className="profile-info">
            <div className="profile-img-placeholder"></div>
            <div>
              <h3>Your Profile</h3>
              <p>Volunteer Stylist</p>
              <p>Overview of your skills and certifications.</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-box">
              <img src="/icons/scissors.png" alt="Skills" />
              <h4>Skills</h4>
              <p>Braiding, Fades</p>
            </div>
            <div className="detail-box">
              <img src="/icons/pin.png" alt="ZIPs" />
              <h4>Preferred ZIP Codes</h4>
              <p>10001, 10002</p>
            </div>
            <div className="detail-box">
              <img src="/icons/checkmark.png" alt="Certifications" />
              <h4>Certifications</h4>
              <p>Uploaded certifications/background check.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tracker-section">
        <h3>Volunteer Hours Tracker</h3>
        <p>Track your contributions.</p>
        <div className="tracker-box">
          <h4>5</h4>
          <p>Completed Appointments</p>
          <span>this month</span>
        </div>
      </section>
    </div>
  );
}

export default VolunteerProfile;
