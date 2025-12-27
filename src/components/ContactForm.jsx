export default function ContactForm() {
  const submitForm = e => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been submitted.");
  };

  return (
    <form className="contact-form" onSubmit={submitForm}>
      <h3>Send an Enquiry</h3>

      <input required placeholder="Your Name" />
      <input type="email" required placeholder="Your Email" />
      <textarea required placeholder="Your Message"></textarea>

      <button type="submit">Send Message</button>
    </form>
  );
}
