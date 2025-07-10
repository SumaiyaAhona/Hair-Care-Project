import { useState } from 'react';
import './Volunteer.css';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: '',
    availability: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.services.trim()) newErrors.services = 'Please specify your hair services';
    if (!formData.availability.trim()) newErrors.availability = 'Availability is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted!', formData);
      alert('Thank you for volunteering!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        services: '',
        availability: ''
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="volunteer-page">
      <h2>Volunteer</h2>
      <p>Sign up to offer your hair services and help foster youth feel confident and cared for.</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label>Hair Services Offered</label>
          <input name="services" value={formData.services} onChange={handleChange} />
          {errors.services && <span className="error">{errors.services}</span>}
        </div>
        <div className="form-group">
          <label>Availability</label>
          <input name="availability" value={formData.availability} onChange={handleChange} />
          {errors.availability && <span className="error">{errors.availability}</span>}
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </section>
  );
}
