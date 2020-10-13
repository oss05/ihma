import React from 'react';
import { Link } from 'react-router-dom';
import ModalEquipoLegal from './ModalEquipoLegal';
import './styles/SociosList.scss';

class SociosList2 extends React.Component{
  
  state={
    verdad: false
  }
  
  modalActive = (verdad) =>{
    if(verdad){
      this.setState({
        verdad: true
      })
    }else{
      this.setState({
        verdad: false
      })
    }
  }

    render(){
      
        return (
          <>
            <ModalEquipoLegal modalActive={this.modalActive} elegido={this.props.elegido} data={this.props.nombres} isOpen={this.state.verdad} />
            <ul className="EquipoLegal__about-socios">
                {
                    this.props.nombres.map( (nombres) =>{
                        return (
                            
                            <li className="EquipoLegal__about-item" key={nombres.id}>
                                <div className="EquipoLegal__about-item-img">
                                    <a href="#" onClick={ (e) => this.props.evento(nombres.id) } >
                                        <img  onClick={() => this.modalActive(true)} src={nombres.image} alt="imagen de socio"/>
                                    </a>
                                </div>
                                <div className="EquipoLegal__about-item-name">
                                    <a href="#" onClick={ (e) => this.props.evento(nombres.id) } >
                                        <img src={nombres.imgTriangulo} alt="trianguloLink"/>
                                    </a>
                                        <p> {nombres.nombre} </p>
                                </div>
                            </li>

                        )
                    } )
                }
            </ul>
          </>
        );
    }
}

export default SociosList2;