import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";
import logo from "../img/Logo.svg";
import menu from "../img/menu.png";
import cerrar from "../img/cerrar.png";
import facebook from "../img/facebookGrey.png";
import twitter from "../img/twitterGrey.png";
import LinkedIn from "../img/linkedinGrey.png";
import triangulo from "../img/triangulo.png";
class Navbar extends React.Component {
  sacarMenu = () => {
    const menu = document.getElementById("menuDesplegable");
    if (menu.style.display.valueOf() === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };

  handleLanguage = () => {
    this.props.changeLanguage(true);
  };

    render(){
        const { link1 , link2 , link3, link31, link32 , link4 , link5 , link6 , idioma } = this.props;
        return (
            <header className="Navbar">
                <div id="menuDesplegable" className="Navbar__desplegable">
                    <div className="Navbar__desplegable-item"><img src={cerrar} onClick={this.sacarMenu}  alt=""/></div>
                    <div className="Navbar__desplegable-item">
                        <Link onClick={this.sacarMenu} to="/ihma/"> 
                        {link1} <img src={triangulo} alt=""/>
                        </Link>
                         </div>
                    <div className="Navbar__desplegable-item">
                        <Link onClick={this.sacarMenu} to="/AreasDePractica"> 
                        {link2} <img src={triangulo} alt=""/>
                        </Link>
                         </div>
                    <div id="aaa" className="Navbar__desplegable-item">
                        <a  onClick={this.sacarMenu} href="#"> 
                        {link3} <img src={triangulo} alt=""/>
                        </a>
                          <ul>
                            <li>
                            <Link onClick={this.sacarMenu} to="/Equipo-Legal"> 
                            {link31} <img src={triangulo} alt=""/>
                            </Link>
                            </li>
                            <li>
                            <Link onClick={this.sacarMenu} to="/Equipo-Legal2"> 
                            {link32} <img src={triangulo} alt=""/>
                            </Link>
                            </li>
                          </ul>
                         </div>
                    <div className="Navbar__desplegable-item">
                        <Link onClick={this.sacarMenu} to="/Clientes"> 
                        {link4} <img src={triangulo} alt=""/>
                        </Link>
                         </div>
                    <div className="Navbar__desplegable-item">
                        <Link onClick={this.sacarMenu} to="/reconocimientos"> 
                        {link5} <img src={triangulo} alt=""/>
                        </Link>
                         </div>
                    <div className="Navbar__desplegable-item">
                        <Link onClick={this.sacarMenu} to="/alianzas"> 
                        {link6} <img src={triangulo} alt=""/>
                        </Link>
                         </div>
                    <div className="Navbar__desplegable-item">
                        <div className="Navbar__desplegable-more">
                            <img src={LinkedIn} alt=""/>
                        </div>
                        <div className="Navbar__desplegable-more">
                            <img src={facebook} alt=""/>
                        </div>
                        <div className="Navbar__desplegable-more">
                            <img src={twitter} alt=""/>
                        </div>
                        <div className="Navbar__desplegable-more">
                          {
                            idioma==='Sp'?'Language':'Idioma'
                          }
                          <div onClick={this.handleLanguage} > {idioma} </div>
                        </div>
                    </div>
                </div>
                <div className="Navbar__oculto" onClick={this.sacarMenu}>
                    <img src={menu} alt="menu"/>
                </div>
                <div className="Navbar__logo"> 
                    <Link to="/ihma">
                        <img src={logo} alt="Logo ihma" />
                    </Link>
                </div>
                <nav className="Navbar__nav">
                    <ul>
                        <li>
                            <Link to="/ihma"> <i>|</i> <span> {link1} </span>  <i>|</i> </Link>
                        </li>
                        <li>
                            <Link to="/AreasDePractica"> <i>|</i> <span> {link2} </span>  <i>|</i> </Link>
                        </li>
                        <li>
                            <a href="#"> <i>|</i> <span> {link3} </span>  <i>|</i> </a>
                            <ul>
                              <li>
                                <Link to="/Equipo-Legal">{link31}</Link>
                              </li>
                              <li>
                                <Link to="/Equipo-Legal2">{link32}</Link>
                              </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/Clientes"> <i>|</i> <span> {link4} </span>  <i>|</i> </Link>
                        </li>
                        <li>
                            <Link to="/reconocimientos"> <i>|</i> <span> {link5} </span>  <i>|</i> </Link>
                        </li>
                        <li>
                            <Link to="/alianzas"> <i>|</i> <span> {link6} </span>  <i>|</i> </Link>
                        </li>
                    </ul>
                    <div className="Navbar__nav-language">
                        <p> 
                          {
                            idioma==='Sp'?'Language':'Idioma'
                          }
                        </p>
                        <div onClick={this.handleLanguage} > {idioma} </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;
