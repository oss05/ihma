import React from 'react';
import Navbar from '../components/Navbar';
import HeroHome from '../components/HeroHome';
import MainHome from '../components/MainHome';
import Footer from '../components/Footer';


class Home extends React.Component{
    render(){
        return <div>
            <Navbar 
            link1="Sobre nosotros"
            link2="Áreas de Práctica"
            link3="Equipo Legal"
            link4="Clientes"
            idioma="En"
            />

            <HeroHome 
            heroDescription1="Consultoría"
            heroDescription2="Legal Internacional"
            
            />
            <MainHome />

            
            <Footer />

        </div>
    }
}

export default Home;