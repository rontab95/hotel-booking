import React from "react";
import { useParams } from "react-router-dom";
import { hotels } from "../data";

const RoomDetails = () => {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id === parseInt(id));

  if (!hotel) return <div>Hotel not found.</div>;

  return (
    <div className="room-details">
      {/* Hero Image */}
      <div className="hero-gallery">
        <img src={hotel.imageSrc} alt={hotel.name} className="hero-image" />
      </div>

      {/* Title & Meta */}
      <div className="room-header">
        <h1 className="room-title">{hotel.name}</h1>
        <div className="room-rating">
          ⭐ {hotel.rating} · {hotel.reviewCount} reviews
        </div>
      </div>

      {/* Amenities */}
      <div className="room-amenities">
        <h3>What this place offers</h3>
        <ul>
          {hotel.hasFreeCancellation && <li>✅ Free cancellation</li>}
          {hotel.includesBreakfast && <li>☕ Breakfast included</li>}
          {hotel.hasParking && <li>🚗 Free parking on premises</li>}
          {hotel.allowsPets && <li>🐶 Pet-friendly</li>}
          {hotel.hasRoomService && <li>🛎️ Room service</li>}
          {hotel.hasFitnessCenter && <li>🏋️‍♂️ Fitness center access</li>}
        </ul>
      </div>

      {/* Price & CTA */}
      <div className="room-pricing">
        <h2>${hotel.pricePerNight} <small>/ night</small></h2>
        <p>Includes taxes and fees</p>
        <button className="book-now-btn">Reserve now</button>
      </div>
    </div>
  );
};

export default RoomDetails;
