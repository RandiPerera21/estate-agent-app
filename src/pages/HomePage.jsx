import { Link } from "react-router-dom";
import AgentList from "../components/AgentList";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="home-hero">
        <h1>Discover Your Next Home</h1>
        <p>Trusted estate agents helping you buy, sell and rent properties</p>
        <Link to="/search" className="cta">Browse Properties</Link>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div>
          <h3>🏠 Buy</h3>
          <p>Find your dream home at the best price</p>
        </div>
        <div>
          <h3>🔑 Rent</h3>
          <p>Quality rental properties across the UK</p>
        </div>
        <div>
          <h3>📈 Invest</h3>
          <p>Expert advice for property investors</p>
        </div>
      </section>

      {/* AGENTS */}
      <section>
        <h2 className="section-title">Meet Our Agents</h2>
        <AgentList />
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <ContactForm />
        <div className="contact-info">
          <h3>Our Office</h3>
          <p>📍 25 Regent Street, London</p>
          <p>📞 +44 20 7946 0958</p>
          <p>✉ info@homeharbor.co.uk</p>
        </div>
      </section>

    </div>
  );
}
