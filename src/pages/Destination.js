import React, { useState } from 'react';
import Header from "../components/Header";
import data from "../data.json";

const Destination = () => {
  const [destinations] = useState(data.destinations);
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = destinations[value];

  return (
    <div className="background--destination">
      <Header />
      <main className="destination">
        
          <p>01 pick your destination</p>
          {
            destinations.map((planet, index) => {
              return (
                <button key={planet.index} onClick={() => setValue(index)}>{planet.name}</button>
              );
            })
          }
        

        {name}
        <br></br>
        <img src={images.webp} alt={name} />
        <br></br>
        {description}
        <br></br>
        {distance}
        <br></br>
        {travel}
      </main>
    </div>
  );
}

export default Destination;