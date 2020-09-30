import React from 'react'
import './styles/EquipoLegal2.scss'
import SociosList2 from '../components/SociosList2';



class EquipoLegal2 extends React.Component{
    
  render(){
      
      return (
          <div className="EquipoLegal2">
              <div className="EquipoLegal__left2">
                  <img src={this.props.rightEquipoLegal2} 
                  alt="imagen del equipo legal" 
                  className="EquipoLegal2__left-img"/>
              </div>
              <div className="EquipoLegal2__about">
                  <h1 className="EquipoLegal2__about-title"> {this.props.language.equipoLegal2.title} </h1>
                  <p className="Equipolegal2__about-description"> {this.props.language.equipoLegal2.details} </p>
                  <SociosList2 nombres={this.props.datosSocios2}
                  evento={this.props.evento}
                  />
              </div>
          </div>
      );
  }
}

export default EquipoLegal2;