import React from 'react';
import './styles/AreasPractica.scss';
import imagenDecoracion from '../img/leftEquipoLegal.png';

class AreasPractica extends React.Component{
  render(){
    return (
      <div className="AreasPractica">
        <div className="AreasPractica__decoration">
          <img src={imagenDecoracion} alt="" className="AreasPractica__decoration-img"/>
        </div>
        <div className="AreasPractica__contenido" key={this.props.data.id}>
          <h1 className="AreasPractica__contenido-title"> {this.props.data.title} </h1>
          <h4 className="AreasPractica__contenido-subtitle"> Nuestro enfoque: <br/> {this.props.data.subtitle} </h4>
          <p className="AreasPractica__contenido-description"> {this.props.data.description} </p>
          <div className="AreasPractica__contenido-list">
            { this.props.data.areas.map( (areas) => {
              return (
                <div>
                  <div></div>
                  <p> {areas} </p>
                </div>
              )
            } ) }
          </div>
        </div>
      </div>
    );
  }
}

export default AreasPractica;