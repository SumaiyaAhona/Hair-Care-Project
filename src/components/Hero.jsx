import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Boosting Confidence Through Quality Hair Care</h1>
          <p>Connecting foster youth with compassionate volunteer hairstylists.</p>
          <div className="hero-buttons">
            <a href="#volunteer" className="btn btn-purple">Volunteer</a>
            <a href="#care" className="btn btn-black">Get Care for your foster youth</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero-image.jpg" alt="Model with long hair" />
        </div>
      </div>
    </section>
  );
}
