import deluxe from "../assets/rooms/deluxe.jpg";
import executive from "../assets/rooms/executive.jpg";
import luxury from "../assets/rooms/luxury.jpg";

const roomsData = [
  {
    id: 1,
    title: "Deluxe Room",
    image: deluxe,
    price: "$80 / Night",
    guests: "2 Guests",
    description: "A comfortable room with a queen-size bed, free Wi-Fi, air conditioning, and a beautiful mountain view."
  },

  {
    id: 2,
    title: "Executive Room",
    image: executive,
    price: "$120 / Night",
    guests: "3 Guests",
    description: "A spacious room with premium facilities, balcony access, and complimentary breakfast."
  },

  {
    id: 3,
    title: "Luxury Suite",
    image: luxury,
    price: "$180 / Night",
    guests: "4 Guests",
    description: "Our finest suite featuring luxury furniture, a private lounge, and stunning valley views."
  }
];

export default roomsData;