import React from "react";
import BestsellerFlag from "./BestsellerFlag.js";

const Hotel = ({ hotel }) => (
  <li className="hotel">
    <div className="hotel__row">
      <div className="hotel__col hotel__col--image">
        <div className="hotel__image-wrapper">
          <img
            src={hotel.imageSrc}
            alt="hotel main entrance"
            className="hotel__image"
          />
          <BestsellerFlag isBestseller={hotel.isBestSeller} />
        </div>
      </div>

      <div className="hotel__col hotel__col--info">
        <div className="hotel__header">
          <h3 className="hotel__name">{hotel.name}</h3>
          <span className="hotel__rating">{hotel.rating}</span>
        </div>

        <div className="hotel__main">
          <div className="hotel__perks-list">
            <div className="perk-group">
              <strong>✔️ Essentials</strong>
              <ul>
                <li>{hotel.hasFreeCancellation && <>✅ Free cancellation</>}</li>
                <li>{hotel.includesBreakfast && <>☕ Breakfast included</>}</li>
              </ul>
            </div>

            <div className="perk-group">
              <strong>🧑‍💼 Services</strong>
              <ul>
                <li>{hotel.hasRoomService && <>🛎️ Room service</>}</li>
                <li>{hotel.hasFitnessCenter && <>🏋️‍♂️ Fitness center</>}</li>
              </ul>
            </div>

            <div className="perk-group">
              <strong>🚗 Extras</strong>
              <ul>
                <li>{hotel.hasParking && <>🚗 Onsite parking</>}</li>
                <li>{hotel.allowsPets && <>🐶 Pet-friendly</>}</li>
              </ul>
            </div>

            {hotel.roomsRemaining > 0 && (
              <div className="hotel__rooms-remaining">
                🔥 Only {hotel.roomsRemaining} rooms left!
              </div>
            )}
          </div>

          <div className="hotel__main--right">
            <span>
              <span className="hotel__price">${hotel.pricePerNight}</span> per night
            </span>
            <span>Includes taxes and charges</span>
            <button className="hotel__see-rooms">
              See our last available rooms >
            </button>
          </div>
        </div>
      </div>
    </div>
  </li>
);
export default Hotel;
