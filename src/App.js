import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Destination from "./Components/Destination";
import Search from "./Components/Search";
import Selects from "./Components/Selects";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Selects />
      <Carousel />
    </div>
  );
}

export default App;
