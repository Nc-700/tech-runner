import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Entre em Contato</h2>
      <form>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
