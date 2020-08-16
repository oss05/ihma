import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';
import logo from '../img/Logo.svg';
import menu from '../img/menu.png';

class Navbar extends React.Component{
    render(){
        const { link1 , link2 , link3 , link4 , link5 , idioma } = this.props;
        return (
            <header className="Navbar">
                <div className="Navbar__oculto">
                    <img src={menu} alt="menu"/>
                </div>
                <div className="Navbar__logo"> 
                    <Link to="/">
                        <img src={logo} alt="Logo ihma" />
                    </Link>
                </div>
                <nav className="Navbar__nav">
                    <ul>
                        <li>
                            <Link to="/"> <i>|</i> <span> {link1} </span>  <i>|</i> </Link>
                        </li>
                        <li>
                            <Link to="/AreasDePractica"> <i>|</i> <span> {link2} </span>  <i>|</i> </Link>
                        </li>
                        <li>
                            <Link to="/Equipo-Legal"> <i>|</i> <span> {link3} </span>  <i>|</i> </Link>
                        </li>
                        <li>
                            <Link to="/Clientes"> <i>|</i> <span> {link4} </span>  <i>|</i> </Link>
                        </li>
                        <li>
                            <Link to="/"> <i>|</i> <span> {link5} </span>  <i>|</i> </Link>
                        </li>
                    </ul>
                    <div className="Navbar__nav-language">
                        <p>Idioma</p>
                        <div> {idioma} </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;