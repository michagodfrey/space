import React, { useState } from 'react';
import Header from "../components/Header";
import data from "../data.json";

const Destination = () => {
  const [destinations] = useState(data.destinations);
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = destinations[value];

  return (
    <div className="destination">
      <Header />
      <main>
        <span>
          <b>01</b> pick your destination
        </span>
        <img className="destination__img" src={images.webp} alt={name} />
        <div>
          {destinations.map((planet, index) => {
            return (
              <button
                key={index.toString()}
                onClick={() => setValue(index)}
                className={`destination__btn ${
                  index === value && "destination__btn--active"
                }`}
              >
                {planet.name}
              </button>
            );
          })}
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="destination__line"></div>
        <div className="destination__box">
          <span className="destination__subheading">avg. distance</span>
          <h3>{distance}</h3>
        </div>
        <div className="destination__box">
          <span className="destination__subheading">est. travel time</span>
          <h3>{travel}</h3>
        </div>
      </main>
    </div>
  );
}

export default Destination;