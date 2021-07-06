import React from 'react';
import './styles/Publicaciones.scss';
import imagenDecoracion from '../img/areas-left.png';
import escuadra from '../img/escuadra.png';
class AreasPractica extends React.Component {
  render() {
    console.log(this.props.data.areas)

    return (
      <div className="AreasPractica">
        <div className="AreasPractica__decoration">
          <img src={imagenDecoracion} alt="" className="AreasPractica__decoration-img" />
        </div>
        <div className="AreasPractica__contenido" >
          <h1 className="AreasPractica__contenido-title">
            <img src={escuadra} alt="" />
            {this.props.data.title}
          </h1>
          {/* <h4 className="AreasPractica__contenido-subtitle"> {this.props.data.enfoque} <br /> {this.props.data.subtitle} </h4>
          <p className="AreasPractica__contenido-description"> {this.props.data.description} </p> */}
          <div className="Publi__contenido-list">
            {this.props.data.areas.map((areas) => {
              return (
                <div key={areas.name} >
                  <div></div>
                  <a href={areas.link} target="_blank">
                    <p> {areas.name} </p>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AreasPractica;