import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Best from "./components/best/Best";
import Featured from "./components/featured/Featured";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
  
    </div>
  );
}

export default App;
