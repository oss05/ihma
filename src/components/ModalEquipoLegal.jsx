import React from 'react'
import ReactDom from 'react-dom';

import Socios2 from './Socios2';
import cerrar from '../img/cerrar.png';
import download from '../img/download.png';
import logo from '../img/Logo.svg';

import './styles/ModalEquipoLegal.scss';

const ModalEquipoLegal = (props) => {
  if(props.isOpen){
    return ReactDom.createPortal(
      <>
       <div className="ModalLegal">
         <div className="ModalLegal__content">
           <div className="ModalLegal__back"></div>
           <div className="ModalLegal__decorate">
             <img src={logo} alt=""/>
             <img onClick={() => ( props.modalActive(false) )} src={cerrar} alt=""/>
           </div>
           <Socios2 
           data={props.data[props.elegido-1]}
           />
           <div className="ModalLegal__card">
              <a href="#">
              V-Card
              <img src={download} alt=""/>
              </a>
           </div>
         </div>
       </div>
      </>
      ,
      document.getElementById('temLegalModal')
    )
  }else{
    return null
  }
}

export default ModalEquipoLegal;