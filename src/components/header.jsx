import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Tech Runner</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#about">Sobre Nós</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
