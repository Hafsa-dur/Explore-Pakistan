import Card from "./Card";
import destinationsData from "../data/destinationsData";

function Features() {
  return (
    <section className="features" id="destinations">
      <h2>Popular Destinations</h2>

      <div className="card-container">
        {destinationsData.map((destination) => (
          <Card
            key={destination.id}
            title={destination.title}
            description={destination.description}
            location={destination.location}
            days={destination.days}
            price={destination.price}
            image={destination.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;