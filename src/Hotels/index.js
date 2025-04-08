import React from "react";
import Hotel from "./Hotel.js";
import { hotels } from "../data.js";

const renderHotel = (hotel) => <Hotel key={hotel.id} hotel={hotel} />;

const HotelsList = (props) => {
  const filterCallback = (hotel) => {
    const everyCallback = (filter) => hotel[filter];
    return props.selectedFilters.every(everyCallback);
  };

  const filteredHotels = hotels.filter(filterCallback);
  const hotelListElements = filteredHotels.map(renderHotel);

  return (
    <div className="hotels-section">
      <header className="page-header">
        <h1 className="main-title">🏨 Book Your Dream Hotel</h1>
        <p className="subtitle">Find the best deals, top-rated stays, and your perfect getaway.</p>
      </header>

      <ul className="hotels-list">{hotelListElements}</ul>
    </div>
  );
};

export default HotelsList;
