import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) =>{
    return (
        <React.Fragment>
            <Navbar 
            link1="Sobre nosotros"
            link2="Areas de Práctica"
            link3="Equipo Legal"
            link4="Clientes"
            link5="Reconocimientos"
            idioma="En"
            />
            {props.children}
            <Footer />
        </React.Fragment>
    );
}

export default Layout;