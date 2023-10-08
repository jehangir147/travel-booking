import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Destination from "./Components/Destination";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destination />
      <Search />
    </div>
  );
}

export default App;
