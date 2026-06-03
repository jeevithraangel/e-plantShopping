import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us-container">

      <div className="background-image">

        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your trusted destination for beautiful
          indoor and outdoor plants that bring life and freshness to your home.
        </p>

        <p>
          Our mission is to promote a greener lifestyle by providing high-quality
          plants and helping people connect with nature in their everyday lives.
        </p>

        <p>
          We believe plants not only beautify spaces but also improve well-being
          and create a peaceful environment.
        </p>

        <Link to="/plants">
          <button>Get Started</button>
        </Link>

      </div>

    </div>
  );
}

export default AboutUs;