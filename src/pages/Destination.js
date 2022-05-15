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
        <h5>
          <b>01</b> pick your destination
        </h5>
        <div className="destination__content">
          <img className="destination__img" src={images.webp} alt={name} />
          <div className="destination__text">
            <div>
              {destinations.map((planet, index) => {
                return (
                  <button
                    className={`destination__btn ${
                      index === value && "destination__btn--active"
                    }`}
                    key={index.toString()}
                    onClick={() => setValue(index)}
                  >
                    <span>{planet.name}</span>
                  </button>
                );
              })}
            </div>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="destination__line"></div>
            <div className="destination__footer">
              <div className="destination__box">
                <span>avg. distance</span>
                <h3>{distance}</h3>
              </div>
              <div className="destination__box">
                <span>est. travel time</span>
                <h3>{travel}</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Destination;