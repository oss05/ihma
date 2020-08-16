import React from 'react';
import SociosList from '../components/SociosList';
import './styles/EquipoLegal.scss';


class EquipoLegal extends React.Component{
    
    render(){
        return (
            <div className="EquipoLegal">
                <div className="EquipoLegal__left">
                    <img src={this.props.leftEquipoLegal} alt="imagen del equipo legal" className="EquipoLegal__left-img"/>
                </div>
                <div className="EquipoLegal__about">
                    <h1 className="EquipoLegal__about-title">Acerca de los socios</h1>
                    <p className="Equipolegal__about-description">Los abogados de IHMA son reconocidos por su innovación legal y su excelente servicio a clientes</p>
                    <SociosList nombres={this.props.datosSocios}
                    evento={this.props.evento}
                    />
                </div>
            </div>
        );
    }
}

export default EquipoLegal;