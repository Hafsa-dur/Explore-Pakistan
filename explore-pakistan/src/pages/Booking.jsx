import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RoomCard from "../components/RoomCard";
import roomsData from "../data/roomsData";

function Booking() {
  const [booking, setBooking] = useState({
    fullName: "",
    email: "",
    destination: "",
    room: "",
    guests: "",
    checkIn: "",
    checkOut: "",
    request: "",
  });
  const [submitted, setSubmitted] = useState(false);
  


  const handleChange = (event) => {
    setBooking({
      ...booking,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
  event.preventDefault();

  setSubmitted(true);
};

  return (
    <>
      <Navbar />

      <section className="booking">

        <h1>Book Your Pakistan Tour</h1>

        <h2 className="room-heading">Available Rooms</h2>

        <div className="card-container">
          {roomsData.map((room) => (
            <RoomCard
              key={room.id}
              title={room.title}
              image={room.image}
              description={room.description}
              guests={room.guests}
              price={room.price}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={booking.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={booking.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Select Destination</label>
          <select
            name="destination"
            value={booking.destination}
            onChange={handleChange}
            required
          >
            <option value="">Choose Destination</option>
            <option>Hunza Valley</option>
            <option>Skardu</option>
            <option>Swat Valley</option>
            <option>Neelum Valley</option>
            <option>Naran Kaghan</option>
            <option>Fairy Meadows</option>
          </select>

          <label>Select Room</label>
          <select
            name="room"
            value={booking.room}
            onChange={handleChange}
            required
          >
            <option value="">Choose Room</option>
            <option>Deluxe Room</option>
            <option>Executive Room</option>
            <option>Luxury Suite</option>
          </select>

          <label>Number of Guests</label>
          <input
            type="number"
            name="guests"
            value={booking.guests}
            onChange={handleChange}
            placeholder="Enter number of guests"
            required
          />

          <label>Check-in Date</label>
          <input
            type="date"
            name="checkIn"
            value={booking.checkIn}
            onChange={handleChange}
            required
          />

          <label>Check-out Date</label>
          <input
            type="date"
            name="checkOut"
            value={booking.checkOut}
            onChange={handleChange}
            required
          />

          <label>Special Request</label>
          <textarea
            name="request"
            rows="4"
            value={booking.request}
            onChange={handleChange}
            placeholder="Write your special request..."
          ></textarea>

          <button className="booking-btn" type="submit">
            Confirm Booking
          </button>

        </form>
        <form onSubmit={handleSubmit}>
   ...
</form>

{submitted && (
  <div className="success-message">

    <h2>🎉 Booking Submitted Successfully!</h2>

    <p>
      Thank you <strong>{booking.fullName}</strong>.
    </p>

    <p>
      Your booking request for <strong>{booking.destination}</strong> has been received.
    </p>

    <p>
      Room: <strong>{booking.room}</strong>
    </p>

    <p>
      Guests: <strong>{booking.guests}</strong>
    </p>

    <p>
      We will contact you soon through your email.
    </p>

  </div>
)}

</section>


      <Footer />
    </>
  );
}

export default Booking;