import React from 'react';
import './styles/Navbar.scss';
import logo from '../img/Logo.svg';


class Navbar extends React.Component{
    render(){
        const { link1 , link2 , link3 , link4 , idioma } = this.props;
        return (
            <div className="Navbar">
                <div className="Navbar__logo"> 
                    <img src={logo} alt="Logo ihma" />
                </div>
                <nav className="Navbar__nav">
                    <ul>
                        <li>
                            <a href=""> <i>|</i> {link1} <i>|</i> </a>
                        </li>
                        <li>
                            <a href=""> <i>|</i> {link2} <i>|</i> </a>
                        </li>
                        <li>
                            <a href=""> <i>|</i> {link3} <i>|</i> </a>
                        </li>
                        <li>
                            <a href=""> <i>|</i> {link4} <i>|</i> </a>
                        </li>
                    </ul>
                    <div className="Navbar__nav-language">
                        <p>Idioma</p>
                        <div> {idioma} </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;