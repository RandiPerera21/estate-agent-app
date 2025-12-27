import AgentList from "./AgentList";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="page">

      <h1>Contact Us</h1>
      

      {/* CONTACT DETAILS + FORM */}
      <section className="contact-main">
        <ContactForm />

        <div className="contact-info">
          <h3>Our Office</h3>
          <p>📍 25 Regent Street, London</p>
          <p>📞 +44 20 7946 0958</p>
          <p>✉ info@homeharbor.co.uk</p>

          <h4>Office Hours</h4>
          <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
          <p>Sat: 10:00 AM – 4:00 PM</p>
        </div>
      </section>

      {/* MEET OUR AGENTS */}
      <section className="meet-agents">
        <h2>Meet Our Agents</h2>
        <p>
        Our experienced agents are here to help you with buying, selling,
        and renting properties. 
        </p>

        <AgentList />
      </section>

    </div>
  );
}
