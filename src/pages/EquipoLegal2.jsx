import React from 'react';
import SociosList2 from '../components/SociosList2';
import './styles/AreasPractica.scss';
import imagenDecoracion from '../img/equipo-legal2.png';
import './styles/EquipoLegal.scss';
import './styles/EquipoLegal2.scss';
import escuadra from '../img/escuadra.png';

class EquipoLegal extends React.Component {

    render() {

        return (

            <div className="AreasPractica Areas2 f-c">
                <div className="AreasPractica__contenido" >
                    <h1 className="AreasPractica__contenido-title">
                        <img src={escuadra} alt="" />
                        {this.props.language.equipoLegal2.title}
                    </h1>
                    <p className="AreasPractica__contenido-description"> {this.props.language.equipoLegal.details} </p>
                    <SociosList2 nombres={this.props.datosSocios2}
                        evento={this.props.evento}
                    />
                </div>
                <div className="AreasPractica__decoration b-g team-mobile-banner2">
                    <img src={imagenDecoracion} alt="" className="AreasPractica__decoration-img" />
                </div>
            </div>

        );
    }
}

export default EquipoLegal;