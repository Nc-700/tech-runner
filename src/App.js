import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import Services from "./components/services";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/fouter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
