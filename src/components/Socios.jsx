import React from 'react';
import './styles/Socios.scss';
import socioDecoration from '../img/socioDecoration.png';
import escuadra from '../img/escuadra.png';

class Socios extends React.Component{
    render(){
        const {imagenSocio , nombreSocio ,
        estatusSocio , nacSocio , titulacionSocio , 
        idiomaSocio , emailSocio , educacion ,
        ExpProf , Miembro , AreaPractica} = this.props;
        return (
            <div className="Socios">
                <div className="Socios__item">
                    <img src={socioDecoration} alt=""/>
                </div>
                <div className="Socios__item">
                    <div className="Socios__item-top">
                        <div>
                            <img src={imagenSocio} alt=""/>
                            <img src={escuadra} alt=""/>
                            <div>
                                <p className="Socio__item-name"> {nombreSocio} </p>
                                <p className="Socio__item-status"> {estatusSocio} </p>
                                <p className="Socio__item-info"> {nacSocio} </p>
                                <p className="Socio__item-info"> {titulacionSocio} </p>
                                <p className="Socio__item-info">Idiomas / Languages: {idiomaSocio} </p>
                                <p className="Socio__item-info">Email: {emailSocio} </p>
                            </div>
                        </div>
                    </div>
                    <div className="Socios__item-bottom">
                        <div>
                            <div> <span></span> Educación</div>
                            <div> {educacion} </div>
                            <div> <span></span> Experiencia<br/> Profesional</div>
                            <div> {ExpProf} </div>
                            <div> <span></span> Miembro</div>
                            <div> {Miembro} </div>
                            <div> <span></span> Áreas de<br/> Práctica</div>
                            <div> {AreaPractica} </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Socios;