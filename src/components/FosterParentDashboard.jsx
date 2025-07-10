import './FosterParentDashboard.css';
import { useNavigate } from 'react-router-dom';

export default function FosterParentDashboard() {
  const navigate = useNavigate();

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
        <form>
          <select><option>Child 1</option><option>Child 2</option></select>
          <select><option>Braiding</option><option>Curl Set</option></select>
          <input type="datetime-local" />
          <input type="text" placeholder="Home, Agency, Salon" />
          <input type="text" placeholder="e.g., prefers tight braids" />
          <button type="submit">Submit Appointment</button>
        </form>
      </section>

      <section className="upcoming-appointments">
        <h2>Upcoming Appointments</h2>
        <div>Child 2 – Curl Set – <strong>Status: Pending volunteer match</strong></div>
        <div>Child 3 – Braid – <strong>Status: Confirmed</strong></div>
      </section>

      <section className="past-appointments">
        <h2>Past Appointments</h2>
        <div>Child 1 – Curl Set – <em>Liked the outcome! Would recommend.</em></div>
        <div>Child 3 – Braids – <em>Prefers looser styles.</em></div>
      </section>
    </div>
  );
}
