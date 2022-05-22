import React from 'react';
import Header from '../components/Header';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="flexbox home__content">
        <div className="flex-item">
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
          >
            So, you want to travel to
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 2.4 }}
          >
            Space
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1.2 }}
          >
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </motion.p>
        </div>
        <motion.div
          className="flex-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1.2 }}
        >
          <Link to="/destination">
            <div className="home__explore">Explore</div>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}

export default Home;