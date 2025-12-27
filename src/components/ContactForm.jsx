export default function ContactForm() {
  return (
    <form className="contact-form">
      <h2>Contact Us</h2>
      <p className="form-subtitle">
        Please fill in the form below and we will get back to you shortly.
      </p>

      <div className="form-row">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
      </div>

      <div className="form-group">
        <label>Subject</label>
        <input type="text" placeholder="Subject" required />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea
          rows="5"
          placeholder="Write your message here..."
          required
        ></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>
  );
  
}
