import React from 'react';
import './styles/MainHome.scss';
import escuadra from '../img/escuadra.png';
class MainHome extends React.Component{
    render(){

        return (
            <main className="MainHome">
                <div className="MainHome__item">
                    <div>
                        <div>
                            <div></div>
                            <p> Un moderno y <br /> dinámico ejercicio <br /> de la profesión </p>
                        </div>
                    </div>
                </div>
                <div className="MainHome__item">
                    <p>
                        <i>IHMA</i> fue concebido como un Bufete que ofrece servicios integrales
                        a clientes nacionales e internacionales acostumbrados a recibir
                        servicios legales de la más alta calidad por parte de los más grandes
                        y destacados despachos, pero con un nivel de atención personalizada
                        en todos los asuntos confiados a éste, que claramente lo distingue de
                        otras firmas legales tradicionales de mayor tamaño.
                        <br /><br/>
                        Los antecedentes académicos y profesionales de los miembros del Bufete, tanto                       en México como en los Estados Unidos de América y
                        Europa, permite a IHMA entender las necesidades de los clientes de
                        una mejor manera, así como los aspectos legales que inciden en una operación                        internacional y brindar respuestas de calidad en tiempo
                        oportuno de acuerdo a las expectativas de los clientes más exigentes.
                    </p>
                </div>
                <div className="MainHome__item">
                    <div>
                        <img src={escuadra} alt=""/>
                        <p>Perspectiva<br/>actualizada de negocios            </p>                        
                    </div>
                    <p>
                    Uno de nuestros principales objetivos consiste en participar proactivamente en los asuntos de nuestros clientes, proporcionando
                    asesoría práctica y confiable a sus requerimientos. La calidad de nuestros servicios está a la altura de las exigencias de un mundo globalizado y en constante transformación. 
                    </p>
                </div>
                <div className="MainHome__item"></div>
            </main>
        );
    }
}

export default MainHome;