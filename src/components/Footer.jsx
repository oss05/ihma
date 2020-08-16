import React from 'react';
import './styles/Footer.scss';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import LinkedIn from '../img/LinkedIn.png';

class Footer extends React.Component{

    render(){

        return (
            <footer className="Footer">
                <div className="footer-container">
                   <div className="Footer__item">
                       <div>
                            <p>Acerca de Nosotros</p>
                            <p>Areas de Práctica</p>
                            <p>Equipo Legal</p>
                            <p>Clientes</p>
                            <p>Reconocimientos</p>
                       </div>
                   </div>
                   <div className="Footer__item">
                        <div>
                            <p>Terminos y condiciones</p>
                            <p>Politicas de privacidad</p>
                       </div>
                   </div>
                   <div className="Footer__item">
                       <div>Contacto</div>
                       <div>
                           <i>Oficina Woodlands, Texas</i>
                           <br/>
                           1095 Evergreen Circle Suite 200 - 432 The Woodlands, TX 77380 T. +1(281) 206 0030
                       </div>
                       <div>
                            <i>Oficina Ciudad de México</i>
                           <br/>
                           Bosque de Ciruelos 130 -501 Col. Bosques de las Lomas, Ciudad de México, 11700 T. +(5255) 5292 6191 +(5255) 5251 8373
                       </div>
                   </div>
                   <div className="Footer__item">
                       <div>
                           <div>Unete a nuestras <br/>Redes Sociales</div>
                       <div>
                           <img src={facebook} alt=""/>
                            <a href="/">Facebook</a>
                       </div>
                       <div>
                           <img src={twitter} alt=""/>
                            <a href="/">Twitter</a>
                       </div>
                       <div>
                           <img src={LinkedIn} alt=""/>
                            <a href="/">Linkedink</a>
                       </div>
                       </div>
                    </div> 
                </div>
            </footer>
        );

    }

}

export default Footer;