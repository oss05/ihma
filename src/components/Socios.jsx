import React from 'react';
import './styles/Socios.scss';
import socioDecoration from '../img/socioDecoration.png';
import escuadra from '../img/escuadra.png';

class Socios extends React.Component{
    render(){
        return (
            <div className="Socios">
                <div className="Socios__item">
                    <img src={socioDecoration} alt=""/>
                </div>
                <div className="Socios__item">
                    <div className="Socios__item-top">
                        <div>
                            <img src={this.props.imagenSocio} alt=""/>
                            <img src={escuadra} alt=""/>
                            <div>
                                <p className="Socio__item-name"> {this.props.nombreSocio} </p>
                                <p className="Socio__item-status"> {this.props.estatusSocio} </p>
                                <p className="Socio__item-info"> {this.props.nacSocio} </p>
                                <p className="Socio__item-info"> {this.props.titulacionSocio} </p>
                                <p className="Socio__item-info">Idiomas / Languages: {this.props.idiomaSocio} </p>
                                <p className="Socio__item-info">Email: {this.props.emailSocio} </p>
                            </div>
                        </div>
                    </div>
                    <div className="Socios__item-bottom">
                        <div>
                            <div> <span></span> Educación</div>
                            <div>
                               {this.props.educacion.map( (educacion) => {
                                   return (
                                    <span key={educacion}>
                                    {educacion}
                                    <br/>
                                    </span>
                                   )
                               }

                               )} 
                            </div>
                            <div> <span></span> Experiencia<br/> Profesional</div>
                            <div> 
                                {this.props.expProfesional.map( (expProfesional) =>{
                                    return (
                                        <span key={expProfesional}>
                                        {expProfesional}
                                        <br/>
                                        </span>
                                    );
                                } )}
                            </div>
                            <div> <span></span> Miembro</div>
                            <div> 
                                {this.props.socioMiembroDe.map( (socioMiembroDe) =>{
                                    return (
                                        <span key={socioMiembroDe}>
                                            {socioMiembroDe}
                                            <br/>
                                        </span>
                                    )
                                }  )}    
                            </div>
                            <div> <span></span> Áreas de<br/> Práctica</div>
                            <div>
                                {this.props.areasDePractica.map( (areasDePractica) => {
                                    return(
                                        <span key={areasDePractica}>
                                            {areasDePractica}
                                            
                                        </span>
                                    )
                                } )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Socios;