import React from 'react'
import ReactDom from 'react-dom';

import './styles/ModalEquipoLegal.scss';

const ModalEquipoLegal = (props) => {
  if(props.isOpen){
    return ReactDom.createPortal(
      <>
       <div className="ModalLegal">
         <div className="ModalLegal__content">
           <h1>hola mundo</h1>
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