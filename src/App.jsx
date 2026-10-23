
import React, { useState } from "react";
import { AnimatePresence } from "motion/react";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Mid from "./Components/Mid";
import Cards from "./Components/Cards";
import FAQ from "./Components/Faq";
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <Preloader
            key="preloader"
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <Home />
          <Mid />
          <Cards />
          <FAQ />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
