import React, { useState } from "react";
import Header from "../components/Header";
import data from "../data.json";

const Technology = () => {
  const [technology] = useState(data.technology);
  const [value, setValue] = useState(0);
  const { name, images, description } = technology[value];
  
  return (
    <div className="background--technology">
      <Header />
      <main className="technology">
        <p>03 space launch 101</p>
        {technology.map((tech, index) => {
          return <button key={tech.index} onClick={() => setValue(index)}>{index + 1}</button>;
        })}
        {name}
        <br></br>
        <div>
          
        </div>
        <img src={images.portrait} alt={name} />
        <br></br>
        {description}
      </main>
    </div>
  );
}

export default Technology;