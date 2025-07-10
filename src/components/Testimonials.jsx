import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Families Say</h2>
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <img src="/sarah.jpg" alt="Sarah J." />
          <h3>⭐⭐⭐⭐⭐ Sarah J.</h3>
          <p>The service provided made a huge difference in my foster child's life!</p>
        </div>
        <div className="testimonial-card">
          <img src="/michael.jpg" alt="Michael R." />
          <h3>⭐⭐⭐⭐⭐ Michael R.</h3>
          <p>The stylists were so caring and did an amazing job on my kids' hair.</p>
        </div>
        <div className="testimonial-card">
          <img src="/emily.jpg" alt="Emily K." />
          <h3>⭐⭐⭐⭐⭐ Emily K.</h3>
          <p>Thankful for the wonderful volunteers who give their time so generously.</p>
        </div>
      </div>
    </section>
  );
}

