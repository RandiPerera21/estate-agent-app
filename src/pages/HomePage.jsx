import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>Discover Your Next Home</h1>
          <p>Trusted estate agents helping you buy, sell and rent properties</p>

          <div className="hero-buttons">
            <Link to="/search" className="cta">
                Browse Properties
            </Link>
            <Link to="/contact" className="cta secondary">
                Contact Us
            </Link>
          </div>
        </div>

        {/*Image*/}
        <div className="hero-image">
          <img src="/images/home-hero.png" alt="Modern home" />
        </div>
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

    </div>
  );
}
