import React from 'react';
import { Link } from 'react-router-dom';
import './styles/SociosList.scss';

class SociosList extends React.Component{
    render(){
        return (
            <ul className="EquipoLegal__about-socios">
                {
                    this.props.nombres.map( (nombres) =>{
                        return (
                            <li className="EquipoLegal__about-item" key={nombres.id}>
                                <div className="EquipoLegal__about-item-img">
                                    <Link to="/">
                                        <img src={nombres.image} alt="imagen de socio"/>
                                    </Link>
                                </div>
                                <div className="EquipoLegal__about-item-name">
                                    <Link to="/">
                                        <img src={nombres.imgTriangulo} alt="trianguloLink"/>
                                    </Link>
                                        <p> {nombres.nombre} </p>
                                </div>
                                
                            </li>
                        )
                    } )
                }
            </ul>
        );
    }
}

export default SociosList;