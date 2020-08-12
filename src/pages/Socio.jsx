import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Socios from '../components/Socios';
import MauricioCampos from '../img/MauricioCampos.png';

const education = (
        <span>
            Universidad Iberoamericana (Licenciatura, 1993)
            <br/>
            Columbia University (Maestría en Derecho, 1999)
            <br/>
            Universidad Iberoamericana (J.D., 1993)
            <br/>
            Columbia University (LL.M., 1999)
        </span>
);

const experiencia = (
    <span>
        Baker & McKenzie, S.C. (1990-1994)
        <br/>
        White & Case, S.C. (1995-1997, 1999-2001)
        <br/>
        White & Case, LLP, New York (1997-1998)
        <br/>
        Jáuregui, Navarrete, Nader y Rojas, S.C.
        <br/>
        (Práctica Internacional Asociada con Mayer, Brown,
        Rowe & Maw), (International Associated Practice with
        Mayer, Brown, Rowe & Maw) (2001-2004)
    </span>
);

const pertenece = (
    <span>
        Colegio Mexicano de Abogados
        <br/>
        The Americas Society
        <br/>    
        Barra Mexicana, Colegio de Abogados, S.C.
        <br/>    
        American Bar Association
        <br/>    
        Mexican Lawyers College
        <br/>    
        The Americas Society
        <br/>    
        Mexican Bar Association
        <br/>    
        American Bar Association
    </span>
);


class Socio extends React.Component{
    render(){
        return (
                <Socios 
                imagenSocio={MauricioCampos}
                nombreSocio="Mauricio Ibañez Campos"
                estatusSocio="Socio"
                nacSocio="Ciudad de México. Noviembre 8, 1969."
                titulacionSocio="Admitido para ejercer, México, 1994"
                idiomaSocio=" Español e Inglés. Spanish and English"
                emailSocio=" mibanez@ihma.law"
                educacion={education}
                ExpProf={experiencia}
                Miembro={pertenece}
                AreaPractica="Derecho Corporativo, Fondos Privados, Fusiones y
                Adquisiciones, Financiamiento de Proyectos,
                Reestructuras, Telecomunicaciones, Transporte,
                Inmobiliario, Minería, Energía.
                Corporate Law, Mergers and Acquisitions, Project Finance,
                Private Equity, Workouts, Real Estate,
                Telecommunications, Transportation, Mining, Energy."
                />
        );
    }
}

export default Socio;