import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="background">
      <Header />
      <main className='home'>
        <p>So, you want to travel to</p>
        <h1>Space</h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
        <div className='explore'>Explore</div>
      </main>
    </div>
  );
}

export default Home