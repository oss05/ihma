import React from 'react';
import './styles/ClientesList.scss';

class ClientesList extends React.Component{
  render(){
    return (
      <React.Fragment>
        { this.props.data.clientesList.map( (clientesList) =>{
          return (
            <div>
              <div></div>
             <p>
               {clientesList}
              </p> 
            
            </div>
          )
        } ) }
      </React.Fragment>
    )
  }
}

export default ClientesList;