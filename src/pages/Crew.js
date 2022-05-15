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
        <h5>
          <b>02</b> meet your crew
        </h5>
        <div className='crew__content'>
          <img className="crew__img" src={images.webp} alt={name} />
          <div className="crew__line"></div>
          <div className='crew__btn-container'>
            {crew.map((x, index) => {
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
          <div className="crew__text">
            <h6>{role}</h6>
            <h4>{name}</h4>
            <p>{bio}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Crew;