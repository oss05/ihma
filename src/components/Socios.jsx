import React from 'react';
import './styles/Socios.scss';
import socioDecoration from '../img/socioDecoration.png';
import escuadra from '../img/escuadra.png';
import download from '../img/download.png';

class Socios extends React.Component {
    constructor(props) {
        super(props)
        // debugger
    }

    render() {

        return (
            <div className="Socios">
                <div className="Socios__item">
                    <img src={socioDecoration} alt="" />
                </div>
                <div className="Socios__item">
                    <div className="Socios__item-top">
                        <div>
                            <img src={this.props.data.imagenCuadrada} alt="" />
                            <div style={{ marginLeft: "20px" }}>
                                <div className="Alianzas__text-titles">
                                    <h1 className="Socio__item-name"> {this.props.data.nombre} <img src={escuadra} alt="" /> </h1>
                                </div>
                                <p className="Socio__item-status"> {this.props.data.estatusSocio} </p>
                                <p className="Socio__item-info"> {this.props.data.nacSocio} </p>
                                <p className="Socio__item-info"> {this.props.data.titulacionSocio} </p>
                                <p className="Socio__item-info"> {this.props.data.idiomaSocio} </p>
                                <p className="Socio__item-info"><span style={{ fontWeight: "bold" }}>Email: </span> <a style={{ color: "#C4161C" }} href={`mailto:${this.props.data.emailSocio}`} className="Socio__item-info"> {this.props.data.emailSocio} </a></p>

                            </div>
                        </div>
                    </div>

                    <div className="Socios__item-bottom">
                        <div>
                            <div> <span></span> {this.props.data.educacionTitle} </div>
                            <div>
                                {this.props.data.educacion.map((educacion) => {
                                    return (
                                        <span key={educacion}>
                                            {educacion}
                                            <br />
                                        </span>
                                    )
                                }

                                )}
                            </div>
                            <div> <span></span> {this.props.data.expTitle}</div>
                            <div>
                                {this.props.data.expProfesional.map((expProfesional) => {
                                    return (
                                        <span key={expProfesional}>
                                            {expProfesional}
                                            <br />
                                        </span>
                                    );
                                })}
                            </div>
                            <div> <span></span>{this.props.data.socioTitle}</div>
                            <div>
                                {this.props.data.socioMiembroDe.map((socioMiembroDe) => {
                                    return (
                                        <span key={socioMiembroDe}>
                                            {socioMiembroDe}
                                            <br />
                                        </span>
                                    )
                                })}
                            </div>
                            <div> <span></span> {this.props.data.areasTitle}</div>
                            <div>
                                {this.props.data.areasDePractica.map((areasDePractica) => {
                                    return (
                                        <span key={areasDePractica}>
                                            {areasDePractica}
                                            <br />
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "1em" }}>
                        <div className="ModalLegal__card">
                            <a href={this.props.data.vCard} target="_blank" style={{ color: "#000", textDecoration: "none", display: "flex", alignItems: "center" }}>
                                V-Card
                         <img src={download} alt="download" style={{ marginLeft: "10px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Socios;