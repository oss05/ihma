import React from 'react';
import './styles/HeroHome.scss';
import textura from '../img/grisTextura.png';
import rojo from '../img/rojoTextura.png';
import logo from '../img/logoHero.png';

class HeroHome extends React.Component{
    render(){
        const { heroDescription1 , heroDescription2 } = this.props;
        return(

            <div className="HeroHome">
                <img src={textura} alt="" className="HeroHome__textura"/>
                <img src={rojo} alt="" className="HeroHome__color"/>
                <img src={logo} alt="" className="HeroHome__logo"/>
                <p className="HeroHome__description"> {heroDescription1}<br /> {heroDescription2} </p>
            </div>

        );
    }
}

export default HeroHome;