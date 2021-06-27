import React from 'react';
import HeroHome from '../components/HeroHome';
import MainHome from '../components/MainHome';
// import mapa from '../img/mapa.png';
// import mapa2 from '../img/mapa2.png';
// import angelMexico from '../img/angelMexico.png';
import markIcon from '../img/markIcon.png';
import celIcon from '../img/celIcon.png';
import './styles/Home.scss';
import mx from '../img/angelMexico.png'
import us from '../img/usOffice.png'

class Home extends React.Component {
    render() {
        const countryImageMx = {
            width: "50%",
            height: "100%",
            backgroundImage: `url(${mx})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundPosition: "center",
        }

        const countryImageUs = {
            width: "50%",
            height: "100%",
            backgroundImage: `url(${us})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundPosition: "center",
        }

        return <React.Fragment>
            <HeroHome
                heroDescription1={this.props.language.home.heroDescription1}
                heroDescription2={this.props.language.home.heroDescription2}
            />
            <MainHome
                language={this.props.language}
            />
            <div className="Home__direction">
                <div className="Home__direction-container">
                    <div className="Home__direction-triangle"></div>
                    <h3 className="Home__direction-place"> {this.props.language.home.office} </h3>
                    <div className="Home__direction-especific">
                        <img className="Home__direction-img" src={markIcon} alt="" />
                        <div>
                            {this.props.language.home.dir1} <br />
                            {this.props.language.home.dir2} <br />
                            {this.props.language.home.dir3} <br />
                        </div>
                    </div>
                    <div className="Home__direction-cel">
                        <img className="Home__direction-img" src={celIcon} alt="" />
                        {this.props.language.nav.actual === 'Sp' ?
                            <div>
                                T. +1(281) 206 0030
                            </div>
                            :
                            <div>
                                T. +(5255) 5292 6191<br />
                            +(5255) 5202 1180<br />
                            </div>
                        }
                    </div>
                </div>
                <div style={this.props.language.nav.actual === 'Sp' ? countryImageUs : countryImageMx}></div>
                {this.props.language.nav.actual === 'Sp' ? <div className="map1"></div> : <div className="map2"></div>}
            </div>

        </React.Fragment>
    }
}

export default Home;