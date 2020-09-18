import React from 'react';
import './styles/MainHome.scss';
import escuadra from '../img/escuadra.png';
import mainBottom from '../img/mainBottom.png';
class MainHome extends React.Component{
    render(){

        return (
            <main className="MainHome">
                <div className="MainHome__item">
                    <div>
                        <div>
                            <div></div>
                            <p> {this.props.language.home.greyDecorate} </p>
                        </div>
                    </div>
                </div>
                <div className="MainHome__item">
                    <p>
                        <i>IHMA</i> {this.props.language.home.details1a}
                        <br /><br/>
                        {this.props.language.home.details1b}
                    </p>
                </div>
                <div className="MainHome__item">
                    <div>
                        <img src={escuadra} alt=""/>
                        <p> {this.props.language.home.details2a} </p>                        
                    </div>
                    <p>
                      {this.props.language.home.details2b}
                    </p>
                </div>
                <div className="MainHome__item">
                    <img src={mainBottom} alt=""/>

                </div>
            </main>
        );
    }
}

export default MainHome;