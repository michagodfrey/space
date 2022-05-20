import React, { useState } from "react";
import Header from "../components/Header";
import data from "../data.json";
import { useMediaQuery } from "react-responsive";

const Technology = () => {
  const [technology] = useState(data.technology);
  const [value, setValue] = useState(0);
  const { name, images, description } = technology[value];
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)'});
  
  return (
    <div className="technology">
      <Header />
      <main>
        <h5>
          <b>03</b> space launch 101
        </h5>
        <div className="flexbox technology__content">
          <img className="technology__img" src={isDesktop ? images.portrait : images.landscape} alt={name} />
          <div className="technology__btn-container">
            {technology.map((x, index) => {
              return (
                <button
                  className={`technology__btn ${
                    index === value && "technology__btn--active"
                  }`}
                  key={index.toString()}
                  onClick={() => setValue(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <div className="flex-item technology__text">
            <span>the terminology...</span>
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Technology;