import React from 'react'

import './styles/Reconocimientos.scss';

import ReconocimientosImg from '../img/ReconocimientosImg.png';
import escuadra from '../img/escuadra.png';
import reco1 from '../img/reco1.png';
import reco2 from '../img/reco2.png';
import reco3 from '../img/reco3.png';

class Reconocimientos extends React.Component {
  render() {
    return (
      <>
        <section className="Reconocimientos">
          <div className="Reconocimientos__img">
            <img src={ReconocimientosImg} alt="Reconocimientos" />
          </div>
          <div className="Reconocimientos__text">
            <div className="Reconocimientos__text-titles">
              <h1> {this.props.language.reconocimientos.title} <img src={escuadra} alt="" /> </h1>
              {/* <h4> {this.props.language.reconocimientos.subtitle} </h4> */}
            </div>
            <div className="Reconocimientos__text-details">
              {/* <p> {this.props.language.reconocimientos.details1} </p> */}
              {/* <p> {this.props.language.reconocimientos.details2} </p>
            <p> {this.props.language.reconocimientos.details3} </p> */}
            </div>
            <div className="Reconocimientos__text-img">
              <img src={reco1} alt="" />
              <img src={reco2} alt="" />
              <img src={reco3} alt="" />
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Reconocimientos;