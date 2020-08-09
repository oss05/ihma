import React from 'react';
import './styles/Socios.scss';
import socioDecoration from '../img/socioDecoration.png';
import escuadra from '../img/escuadra.png';

class Socios extends React.Component{
    render(){
        const {imagenSocio , nombreSocio ,
        estatusSocio , nacSocio , titulacionSocio , 
        idiomaSocio , emailSocio} = this.props;
        return (
            <div className="Socios">
                <div className="Socios__item">
                    <img src={socioDecoration} alt=""/>
                </div>
                <div className="Socios__item">
                    <div>
                        <div>
                            <img src={imagenSocio} alt=""/>
                            <img src={escuadra} alt=""/>
                            <div>
                                <p className="Socio__item-name"> {nombreSocio} </p>
                                <p className="Socio__item-status"> {estatusSocio} </p>
                                <p className="Socio__item-info"> {nacSocio} </p>
                                <p className="Socio__item-info"> {titulacionSocio} </p>
                                <p className="Socio__item-info"> {idiomaSocio} </p>
                                <p className="Socio__item-info"> {emailSocio} </p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Socios;