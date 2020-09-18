import React from 'react'

import './styles/Alianzas.scss';

import alianzasImg from '../img/alianzasImg.png';
import alianzasLogo from '../img/alianzasLogo.png';
import escuadra from '../img/escuadra.png';


class Alianzas extends React.Component{
  render(){
    return(
      <>
      <section className="Alianzas">
        <div className="Alianzas__img">
          <img src={alianzasImg} alt="alianzas"/>
        </div>
        <div className="Alianzas__text">
          <div className="Alianzas__text-titles">
            <h1> {this.props.language.alianzas.title} <img src={escuadra} alt=""/> </h1>
            <h4> {this.props.language.alianzas.subtitle} </h4>
          </div>
          <div className="Alianzas__text-details">
            <p> {this.props.language.alianzas.details1} </p>
            <p> {this.props.language.alianzas.details2} </p>
            <p> {this.props.language.alianzas.details3} </p>
          </div>
          <div className="Alianzas__text-img">
            <a href="https://www.lkclawfirm.com">https://www.lkclawfirm.com</a>
            <img src={alianzasLogo} alt=""/>
          </div>
        </div>
      </section>
      </>
    )
  }
}

export default Alianzas;