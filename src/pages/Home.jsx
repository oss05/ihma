import React from 'react';
import Navbar from '../components/Navbar';

class Home extends React.Component{
    render(){
        return <div>
            <Navbar 
            link1="Sobre nosotros"
            link2="Áreas de Práctica"
            link3="Equipo Legal"
            link4="Clientes"
            idioma="Es"
            />
        </div>
    }
}

export default Home;