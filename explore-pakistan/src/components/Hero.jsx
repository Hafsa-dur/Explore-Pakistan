import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Explore Pakistan</h1>

        <p>
          Discover breathtaking valleys, majestic mountains,
          beautiful lakes, and unforgettable adventures across Pakistan.
        </p>

        <div className="hero-buttons">
          <Link to="/booking">
  <button className="book-btn">Book Now</button>
</Link>

          <a href="#destinations">
  <button className="explore-btn">
    Explore Tours
  </button>
</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;