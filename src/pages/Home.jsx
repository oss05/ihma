import React from 'react';
import HeroHome from '../components/HeroHome';
import MainHome from '../components/MainHome';
import mapa from '../img/mapa.png';
import angelMexico from '../img/angelMexico.png';
import markIcon from '../img/markIcon.png';
import celIcon from '../img/celIcon.png';
import './styles/Home.scss';

class Home extends React.Component{
    render(){
        return <React.Fragment>
            <HeroHome 
            heroDescription1="Consultoría"
            heroDescription2="Legal Internacional"
            />
            <MainHome />
            <div className="Home__direction">
                <div>
                    <div className="Home__direction-triangle"></div>
                    <h3 className="Home__direction-place"> Oficina Ciudad de México </h3>
                    <div className="Home__direction-especific">
                        <img src={markIcon} alt=""/>
                        <div>
                        Bosque de Ciruelos 130 -501<br/>
                        Col. Bosques de las Lomas,<br/>
                        Ciudad de México, 11700<br/>
                        </div>
                    </div>
                    <div className="Home__direction-cel">
                        <img src={celIcon} alt=""/>
                        <div>
                        T. +(5255) 5292 6191<br/>
                        +(5255) 5251 8373<br/>
                        </div>
                    </div>
                </div>
                <img src={angelMexico} alt="angel de la independencia"/>
                <img src={mapa} alt="croquis para llegar a ihma"/>
            </div>

        </React.Fragment>
    }
}

export default Home;