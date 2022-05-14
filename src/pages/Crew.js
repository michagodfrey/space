import React, { useState } from 'react';
import Header from "../components/Header";
import data from "../data.json";

const Crew = () => {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);
  const {name, images, role, bio} = crew[value];

  return (
    <div className="crew">
      <Header />
      <main>
        <span>
          <b>02</b> meet your crew
        </span>
        <img className="crew__img" src={images.webp} alt={name} />
        <div className="crew__line"></div>
        <div>
          {crew.map((name, index) => {
            return (
              <button
                key={index.toString()}
                onClick={() => setValue(index)}
                className={`crew__btn ${
                  index === value && "crew__btn--active"
                }`}
              ></button>
            );
          })}
        </div>
        <span className="crew__role">{role}</span>
        <h4>{name}</h4>
        <p>{bio}</p>
      </main>
    </div>
  );
}

export default Crew;