function RoomCard(props) {
  return (
    <div className="card">

      <img src={props.image} alt={props.title} />

      <div className="card-content">

        <h2>{props.title}</h2>

        <p>{props.description}</p>

        <p>
          <strong>Capacity:</strong> {props.guests}
        </p>

        <h3>{props.price}</h3>

        <button>Select Room</button>

      </div>

    </div>
  );
}

export default RoomCard;