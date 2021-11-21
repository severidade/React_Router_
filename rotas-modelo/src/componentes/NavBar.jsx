import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="menu_principal">
        <Link to="/">Home</Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to="/ApiFilmes">Api de Filmes</Link>
        <Link to="/Contato">Contato</Link>
      </nav>
    );
  }
}

export default NavBar;
