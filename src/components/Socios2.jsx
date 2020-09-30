import React from 'react';
import './styles/Socios.scss';
import socioDecoration from '../img/socioDecoration.png';
import escuadra from '../img/escuadra.png';

class Socios2 extends React.Component{
  constructor(props){
    super(props)
    // debugger
  }
    render(){
        return (
            <div className="Socios">
                <div className="Socios__item">
                    <img src={socioDecoration} alt=""/>
                </div>
                <div className="Socios__item">
                    <div className="Socios__item-top">
                        <div>
                            <img src={this.props.data.imagenCuadrada} alt=""/>
                            <img src={escuadra} alt=""/>
                            <div>
                                <p className="Socio__item-name"> {this.props.data.nombre} </p>
                                <p className="Socio__item-status"> {this.props.data.estatusSocio} </p>
                                <p className="Socio__item-info"> {this.props.data.nacSocio} </p>
                                <p className="Socio__item-info"> {this.props.data.titulacionSocio} </p>
                                <p className="Socio__item-info"> {this.props.data.idiomaSocio} </p>
                                <p className="Socio__item-info"> {this.props.data.emailSocio} </p>
                            </div>
                        </div>
                    </div>
                    <div className="Socios__item-bottom">
                        <div>
                            <div> <span></span> {this.props.data.educacionTitle} </div>
                            <div>
                               {this.props.data.educacion.map( (educacion) => {
                                   return (
                                    <span key={educacion}>
                                    {educacion}
                                    <br/>
                                    </span>
                                   )
                               }

                               )} 
                            </div>
                            <div> <span></span> {this.props.data.expTitle}</div>
                            <div> 
                                {this.props.data.expProfesional.map( (expProfesional) =>{
                                    return (
                                        <span key={expProfesional}>
                                        {expProfesional}
                                        <br/>
                                        </span>
                                    );
                                } )}
                            </div>
                            {this.props.data.socioTitle?
                            <>
                            <div> <span></span>{this.props.data.socioTitle}</div>
                            <div> 
                                {this.props.data.socioMiembroDe.map( (socioMiembroDe) =>{
                                    return (
                                        <span key={socioMiembroDe}>
                                            {socioMiembroDe}
                                            <br/>
                                        </span>
                                    )
                                }  )}    
                            </div>
                            </>
                            :
                            null
                            }
                            <div> <span></span> {this.props.data.areasTitle}</div>
                            <div>
                                {this.props.data.areasDePractica.map( (areasDePractica) => {
                                    return(
                                        <span key={areasDePractica}>
                                            {areasDePractica}
                                            <br/>   
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

export default Socios2;