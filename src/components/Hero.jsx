import './Hero.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Boosting Confidence Through Quality Hair Care</h1>
          <p>Connecting foster youth with compassionate volunteer hairstylists.</p>
          <div className="hero-buttons">
            <Link to="/general/signup" className="btn btn-purple">Volunteer</Link>
            <Link to="/general/signup" className="btn btn-black">Get Care for your foster youth</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero-image.jpg" alt="Model with long hair" />
        </div>
      </div>
    </section>
  );
}
