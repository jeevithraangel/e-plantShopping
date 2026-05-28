import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="landing-page">

      <div className="overlay">

        <h1>Paradise Nursery</h1>

        <p>
          Beautiful indoor plants for your home.
        </p>

        <Link to="/plants">
          <button>Get Started</button>
        </Link>

      </div>

    </div>
  );
}

export default AboutUs;