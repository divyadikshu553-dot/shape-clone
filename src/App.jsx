import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Nav from "./Components/Nav.jsx";
import Hero from "./Components/Hero.jsx";
import WhoAreWe from "./Components/WhoareWe.jsx";



function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <WhoAreWe/>
    </>
  );
}

export default App;
