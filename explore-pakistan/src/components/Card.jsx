import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">

      <img src={props.image} alt={props.title} />

      <div className="card-content">

        <h2>{props.title}</h2>

        <p>{props.description}</p>

        <p>
          <strong>Location:</strong> {props.location}
        </p>

        <p>
          <strong>Duration:</strong> {props.days}
        </p>

        <h3>{props.price}</h3>

        <Link to="/booking">
  <button>Book Tour</button>
</Link>

      </div>
    </div>
  );
}

export default Card;