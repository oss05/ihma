import React from 'react';
import ClientesList from '../components/ClientesList';
import './styles/Clientes.scss';
import clientesDecorate from '../img/writting.png';

class Clientes extends React.Component{
  render(){
    return ( 
      <div className="Clientes">
        <div className="Clientes__content">
          <h1 className="Clientes__content-titulo"> <div></div> {this.props.data.titulo} </h1>
          <p className="Clientes__content-descripcion"> {this.props.data.descripcion} </p>
          <div className="Clientes__content-list">
            <ClientesList
            data={this.props.data}
            />
          </div>
        </div>
        <div className="Clientes__decorate">
          <img src={clientesDecorate} alt=""/>
        </div>
      </div>
    );
  }
}

export default Clientes;