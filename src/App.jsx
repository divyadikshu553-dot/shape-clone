import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Nav from "./Components/nav";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";



function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Footer/>
    </>
  );
}

export default App;
