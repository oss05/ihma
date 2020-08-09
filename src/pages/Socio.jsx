import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Socios from '../components/Socios';
import MauricioCampos from '../img/MauricioCampos.png';
class Socio extends React.Component{
    render(){
        return (
            <div>
                <Navbar
                link1="Sobre nosotros"
                link2="Áreas de Práctica"
                link3="Equipo Legal"
                link4="Clientes"
                idioma="En"
                />

                <Socios 
                imagenSocio={MauricioCampos}
                nombreSocio="Mauricio Ibañez Campos"
                estatusSocio="Socio"
                nacSocio="Ciudad de México. Noviembre 8, 1969."
                titulacionSocio="Admitido para ejercer, México, 1994"
                idiomaSocio="Idiomas / Languages: Español e Inglés. Spanish and English"
                emailSocio="Email: mibanez@ihma.law"

                />

                <Footer />
            </div>
        );
    }
}

export default Socio;