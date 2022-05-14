import React, { useState } from "react";
import Header from "../components/Header";
import data from "../data.json";

const Technology = () => {
  const [technology] = useState(data.technology);
  const [value, setValue] = useState(0);
  const { name, images, description } = technology[value];
  
  return (
    <div className="technology">
      <Header />
      <main>
        <span>
          <b>03</b> space launch 101
        </span>
        <img className="technology__img" src={images.portrait} alt={name} />
        <div>
          {technology.map((tech, index) => {
            return (
              <button key={index.toString()} onClick={() => setValue(index)}>
                {index + 1}
              </button>
            );
          })}
        </div>
        <span>the terminology</span>
        <h4>{name}</h4>
        <p>{description}</p>
      </main>
    </div>
  );
}

export default Technology;