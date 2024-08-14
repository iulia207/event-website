import "./app.scss"
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Intermission from "./components/intermission/Intermission";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import PartiesList from "./components/parties/PartiesList";


const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar/>
        <Hero />
      </section>
      <section id="About"><Intermission type="about"/></section>
      <section><About /></section>
      <section id="Events"><Intermission type="events"/></section>
      <section> <PartiesList/> </section>
      <section id="Contact"><Contact /></section>
    </div>
  );
}

export default App
