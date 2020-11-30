import React from 'react'

import './styles/Alianzas.scss';
import alianzasImg from '../img/alianzasImg.png';
import alianzasLogo from '../img/alianzasLogo.png';
import escuadra from '../img/escuadra.png';


class Alianzas extends React.Component {
  render() {
    return (
      <>
        <section className="Alianzas">
          <div className="Alianzas__img">
            <img src={alianzasImg} alt="alianzas" />
          </div>
          <div className="Alianzas__text">
            <div className="Alianzas__text-titles">
              <h1> {this.props.language.alianzas.title} <img src={escuadra} alt="" /> </h1>
              <h4> {this.props.language.alianzas.subtitle} </h4>
            </div>
            <div className="Alianzas__text-details">
              <p> {this.props.language.alianzas.details1} </p>
              <div className="Socios__item-bottom">
                <div>
                  <div> <span></span>  </div>
                  <div>
                    <span >
                      {this.props.language.alianzas.details2}
                    </span>
                  </div>

                </div>
                <div>
                  <div> <span></span>  </div>
                  <div>
                    <span >
                      {this.props.language.alianzas.details3}
                      <br />
                      <a href="https://www.lkclawfirm.com" style={{ color: "#2178FF" }} target="_blank">https://www.lkclawfirm.com</a>
                    </span>
                  </div>

                </div>
                {/* <div>
                  <div> <span></span>  </div>
                  <div>
                    <span >
                      {this.props.language.alianzas.details4}
                      <br />
                    </span>
                  </div>

                </div> */}
              </div>
            </div>
            {/* <div className="Alianzas__text-img">
              <a href="https://www.lkclawfirm.com">https://www.lkclawfirm.com</a>
              <img src={alianzasLogo} alt="" />
            </div> */}
          </div>
        </section>




      </>
    )
  }
}

export default Alianzas;