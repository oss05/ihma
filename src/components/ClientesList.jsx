import React from 'react';
import './styles/ClientesList.scss';

class ClientesList extends React.Component{
  render(){
    return (
      <React.Fragment>
        { this.props.data.clientesList.map( (clientesList) =>{
          return (
            <React.Fragment>
            {clientesList}
            <br/>
            </React.Fragment>
          )
        } ) }
      </React.Fragment>
    )
  }
}

export default ClientesList;