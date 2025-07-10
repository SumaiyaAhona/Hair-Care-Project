import React from 'react';
import './HelpCenter.css'; // if you’re using CSS modules or plain CSS

const HelpCenter = () => {
  return (
    <div className="help-center">
      <h1>Help Center</h1>
      <p>Find answers to common questions about using our site and our safety guidelines.</p>

      <section>
        <h2>How to use the site</h2>
        <div className="faq-card">
          <h3>Creating an Account</h3>
          <p>To create an account, click 'Sign Up' at the top right corner and fill in your details.</p>
        </div>
        <div className="faq-card">
          <h3>Navigating the Dashboard</h3>
          <p>Your dashboard provides access to your profile, settings, and more!</p>
        </div>
        <div className="faq-card">
          <h3>Understanding Features</h3>
          <p>Explore exclusive features available after logging in for enhanced usability.</p>
        </div>
      </section>

      <section>
        <h2>Safety Guidelines</h2>
        <div className="faq-card">
          <h3>Keeping Your Account Safe</h3>
          <p>Always use a strong password and do not share your credentials with others.</p>
        </div>
        <div className="faq-card">
          <h3>Reporting Issues</h3>
          <p>If you come across any suspicious activity, report it immediately through the contact form.</p>
        </div>
        <div className="faq-card">
          <h3>Privacy Settings</h3>
          <p>Review your privacy settings regularly to control who can see your data.</p>
        </div>
      </section>

      <section>
        <h2>Code of Conduct</h2>
        <div className="faq-card">
          <h3>Respect Others</h3>
          <p>Treat all users with respect and refrain from harmful or offensive language.</p>
        </div>
        <div className="faq-card">
          <h3>Use Appropriate Content</h3>
          <p>Only share content that is suitable for all audiences.</p>
        </div>
        <div className="faq-card">
          <h3>Engagement Protocols</h3>
          <p>Follow our engagement protocols to foster a positive environment.</p>
        </div>
      </section>

      <footer>
        <p>© 2023 Hair for Those In Care. All rights reserved.</p>
        <a href="/">Back</a>
      </footer>
    </div>
  );
};

export default HelpCenter;
