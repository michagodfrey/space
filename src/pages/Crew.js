import React, { useState } from 'react';
import Header from "../components/Header";
import data from "../data.json";

const Crew = () => {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);
  const {name, images, role, bio} = crew[value];

  return (
    <div className="background--crew">
      <Header />
      <main className="crew">
        <p>02 meet your crew</p>
        {crew.map((name, index) => {
          return <button key={name.index} onClick={() => setValue(index)}>dot</button>;
        })}

        {name}
        <br></br>
        <img src={images.webp} alt={name} />
        <br></br>
        {role}
        <br></br>
        {bio}
    
      </main>
    </div>
  );
}

export default Crew;