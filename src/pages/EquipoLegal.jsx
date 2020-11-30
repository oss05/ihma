import React from 'react';
import SociosList from '../components/SociosList';
import './styles/AreasPractica.scss';
import imagenDecoracion from '../img/leftEquipoLegal.png';
import './styles/EquipoLegal.scss';
import escuadra from '../img/escuadra.png';

class EquipoLegal extends React.Component {

    render() {

        return (

            <div className="AreasPractica">
                <div className=" team-mobile-banner">
                    <img src={imagenDecoracion} alt="" className="AreasPractica__decoration-img" />
                </div>
                <div className="AreasPractica__contenido" >
                    <h1 className="AreasPractica__contenido-title">
                        <img src={escuadra} alt="" />
                        {this.props.language.equipoLegal.title}
                    </h1>
                    <p className="AreasPractica__contenido-description"> {this.props.language.equipoLegal.details} </p>
                    <SociosList nombres={this.props.datosSocios}
                        evento={this.props.evento}
                    />
                </div>
            </div>

        );
    }
}

export default EquipoLegal;