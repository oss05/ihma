import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Socios from './Socios';
import EquipoLegal from '../pages/EquipoLegal';
import fotoEquipoLegal from '../img/leftEquipoLegal.png';
import MauricioCamposRedondo from '../img/MauricioCamposRedondo.png';
import JorgeAriasRedondo from '../img/JorgeAriasRedondo.png';
import JesusMendozaRedondo from '../img/JesusMendozaRedondo.png';
import DiegoMaxRedondo from '../img/DiegoMaxRedondo.png';
import triangulo from '../img/triangulo.png';
import MauricioCamposCuadrado from '../img/MauricioCampos.png';

class App extends React.Component{

    state = {
        dataSocios: [
            {
                id: '1',
                nombre: 'Mauricio Ibañez Campos',
                image: `${MauricioCamposRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: [ 'Universidad Iberoamericana (Licenciatura, 1993)',
                             'Columbia University (Maestría en Derecho, 1999)',
                             'Universidad Iberoamericana (J.D., 1993)' ,
                             'Columbia University (LL.M., 1999)' ],
                expProfesional: [ 'Baker & McKenzie, S.C. (1990-1994)',
                                'White & Case, S.C. (1995-1997, 1999-2001)',
                                'White & Case, LLP, New York (1997-1998)',
                                'Jáuregui, Navarrete, Nader y Rojas, S.C.',
                                '(Práctica Internacional Asociada con Mayer, Brown,Rowe & Maw), (International Associated Practice with Mayer, Brown, Rowe & Maw) (2001-2004)',
                                ],
                socioMiembroDe: [ 'Colegio Mexicano de Abogados',
                                'The Americas Society',
                                'Barra Mexicana, Colegio de Abogados, S.C.',
                                'American Bar Association',
                                'Mexican Lawyers College',
                                'The Americas Society',
                                'Mexican Bar Association',
                                'American Bar Association',
                                ],
                areasDePractica: ['Derecho Corporativo, Fondos Privados, Fusiones y Adquisiciones, Financiamiento de Proyectos, Reestructuras, Telecomunicaciones, Transporte, Inmobiliario, Minería, Energía. Corporate Law, Mergers and Acquisitions, Project Finance, Private Equity, Workouts, Real Estate, Telecommunications, Transportation, Mining, Energy.',
                                ],
                imagenCuadrada: `${MauricioCamposCuadrado}`,
                estatusSocio: "Socio",
                nacSocio: "Ciudad de México. Noviembre 8, 1969.",
                titulacionSocio: "Admitido para ejercer, México, 1994",
                idiomaSocio: " Español e Inglés. Spanish and English",
                emailSocio: " mibanez@ihma.law",
                
            },
            {
                id: '2',
                nombre: 'Jorge Hoffmann Arias',
                image: `${JorgeAriasRedondo}`,
                imgTriangulo: `${triangulo}`,
                
            },
            {
                id: '3',
                nombre: 'Jesus Mendoza Henríquez',
                image: `${JesusMendozaRedondo}`,
                imgTriangulo: `${triangulo}`,
                
            },
            {
                id: '4',
                nombre: 'Diego Andrade Max',
                image: `${DiegoMaxRedondo}`,
                imgTriangulo: `${triangulo}`,
                
            },
        ],
        socioSolicitado: ''
        
    }

    evento = (id) =>{
        this.setState({
            socioSolicitado: `${id}`
        })

        //console.log('hola el id generado es'+ this.state.socioSolicitado)
    }

    render(){
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Equipo-Legal"
                        render={ () => 
                        <EquipoLegal 
                        leftEquipoLegal={fotoEquipoLegal} 
                        datosSocios={this.state.dataSocios}
                        evento = {this.evento}
                        />
                        }
                        />  
                        <Route exact path="/Equipo-Legal/info"
                        render={ () => 
                        <Socios 
                        nombreSocio={this.state.dataSocios[this.state.socioSolicitado-1].nombre}
                        imagenSocio={this.state.dataSocios[this.state.socioSolicitado-1].imagenCuadrada}
                        estatusSocio={this.state.dataSocios[this.state.socioSolicitado-1].estatusSocio}
                        nacSocio={this.state.dataSocios[this.state.socioSolicitado-1].nacSocio}
                        titulacionSocio={this.state.dataSocios[this.state.socioSolicitado-1].titulacionSocio}
                        idiomaSocio={this.state.dataSocios[this.state.socioSolicitado-1].idiomaSocio}
                        emailSocio={this.state.dataSocios[this.state.socioSolicitado-1].emailSocio}
                        educacion={this.state.dataSocios[this.state.socioSolicitado-1].educacion}
                        expProfesional={this.state.dataSocios[this.state.socioSolicitado-1].expProfesional}
                        socioMiembroDe={this.state.dataSocios[this.state.socioSolicitado-1].socioMiembroDe}
                        areasDePractica={this.state.dataSocios[this.state.socioSolicitado-1].areasDePractica}
                        />
                        }
                        /> 
                    </Switch>
                </Layout>
            </BrowserRouter>
        );

    }
}

export default App;
