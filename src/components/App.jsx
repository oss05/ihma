import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Socios from './Socios';
import AreasPractica from '../pages/AreasPractica';
import EquipoLegal from '../pages/EquipoLegal';
import Clientes from '../pages/Clientes';
import fotoEquipoLegal from '../img/leftEquipoLegal.png';
import MauricioCamposRedondo from '../img/MauricioCamposRedondo.png';
import JorgeAriasRedondo from '../img/JorgeAriasRedondo.png';
import JesusMendozaRedondo from '../img/JesusMendozaRedondo.png';
import DiegoMaxRedondo from '../img/DiegoMaxRedondo.png';
import triangulo from '../img/triangulo.png';
import MauricioCamposCuadrado from '../img/MauricioCampos.png';
import JorgeAriasCuadrado from '../img/JorgeArias.png';
import JesusMendozaCuadrado from '../img/JesusMendoza.png';
import DiegoMaxCuadrado from '../img/DiegoMax.png';

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
                                'Mexican Lawyers College',
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
                educacion: [ 'Universidad Iberoamericana (Licenciatura, 1991)',
                'Universidad Iberoamericana (J.D., 1991)',
                 ],
                expProfesional: [ 'Zitro-Lex, S.A. de C.V. (1987-1989)',
                   'Alvarez, Cantón y Peters, S.C. (1989-1991)',                  
                   'Hoffmann y Asociados, S.C. (1991-1998)',
                   'Buenfil & Hoffmann, S.C. (1998-2005',
                   ],
                socioMiembroDe: [ 'Barra Mexicana, Colegio de Abogados, S.C.',
                   'Mexican Bar Association',
                   ],
                areasDePractica: [ 'Derecho Laboral',
                                    'Seguridad Social',
                                    'Labor and Employment Law',
                                    'Social Security'
                   ],
                imagenCuadrada: `${JorgeAriasCuadrado}`,
                estatusSocio: "Socio",
                nacSocio: "Ciudad de México. Noviembre 7, 1967.",
                titulacionSocio: "Admitido para ejercer, México, 1995",
                idiomaSocio: " Español e Inglés. Spanish and English",
                emailSocio: " jhoffmann@ihma.law",
            },
            {
                id: '3',
                nombre: 'Jesus Mendoza Henríquez',
                image: `${JesusMendozaRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: [ 'Universidad Anáhuac (Licenciatura, 2000)',
                            'Pepperdine University (Juris Doctor – EEUU)',
                            'Strauss Institute for Dispute Resolution, Pepperdine',
                            'University (Maestría en Resolución Alternativa de Disputas Internacionales 2004)',
                            'Universidad Anáhuac (J.D., Mexico)',
                            'Pepperdine University (J.D., 2000',
                            'University (LL.M in International Dispute Resolution, 2004)',
                            ],
                expProfesional: [ 'Buenfil & Hoffmann, S.C. (Pasante 1998-2000)',
                                    'Comisión Federal de Competencia (Subdirector de Asuntos Jurídicos 2000-2001)',
                                    'Mediador de la Corte de Los Ángeles, California (Clínica de Resolución Alternativa de Disputas 2003)',
                                    'Director General Adjunto y Director General de Asuntos Jurídicos (2004-2008)',
                                    'Grupo Sacbes (Socio fundador 2008-2018)',
                                    'Buenfil & Hoffmann, S.C. (Clerk 1998-2000)',
                                    'Federal Competition Commission (Mexico, Legal Affairs Subdirector 2000-2001)',
                                    'Court Mediator Los Angeles County (Dispute Resolution Clinic Pepperdine University, 2003)',
                                    'Deputy General Counsel and General Counsel (2004-2008) Grupo Sacbes (Partner 2008-2018)',
                                ],
                socioMiembroDe: [ 'Barra Mexicana, Colegio de Abogados, S.C.',
                                    'Mexican Bar Association',
                                ],
                areasDePractica: ['Competencia Económica',
                                    'Derecho Administrativo – Consultoría y litigio',
                                    'Derecho Corporativo',
                                    'Derecho de las Telecomunicaciones',
                                    'Fusiones y Adquisiciones',
                                    'Derecho Energético.',
                                    'Antitrust Law',
                                    'Administrative Law – consulting and litigation',
                                    'Corporate Law',
                                    'Telecommunications Law',
                                    'Mergers and Acquisitions',
                                    'Energy'
                   ],
                imagenCuadrada: `${JesusMendozaCuadrado}`,
                estatusSocio: "Socio",
                nacSocio: "Ciudad de México.Diciembre 10, 1975.",
                titulacionSocio: "Admitido para ejercer, México, 2001",
                idiomaSocio: " Español e Inglés. Spanish and English",
                emailSocio: " jmendoza@ihma.law",
                
            },
            {
                id: '4',
                nombre: 'Diego Andrade Max',
                image: `${DiegoMaxRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: [ 'Universidad Iberoamericana (Licenciatura, 1992)',
                            'Universitaet Wien, Austria (Doctorado,Derecho Internacional y Derecho Comunitario,1994)',
                            'The University of Chicago Law School (LL.M, 1996)',
                            'Universidad Iberoamericana (J.D., 1992)',
                            'Universitaet Wien, Austria (International and European EU Law, Doctorate, 1994)',
                            ],
                expProfesional: [ 'Von Wobeser y Sierra, S.C. (Pasante 1988–1992)',
                                'ICC International Court of Arbitration (Pasante, 1993)',
                                'Comision Federal de Competencia (Sub-Director Jurídico 1994 -1995)',
                                'Gardner Carton Douglas, Chicago (Pasante extranjero 1996-1997)',
                                'Freshfields Deringer, Bruselas UE (Asociado 1997-1999)',
                                'BOCAR, S.A. de C.V. (Sub Gerente Legal 1999-2005)',
                                'Bristol Myers Squibb de Mexico, S. de R.L. de C.V. (Director Jurídico 2005-2008)',
                                'Bristol Myers Squibb Company, Princeton NJ (Director Juródico Adjunto para Latinoamérica, Región Intercontinental, 2008-2012)',
                                'Aggreko LLC, Houston TX (Vice Presidente Riesgo Comercial y Legal América Latina 2013-2017)',
                                'Von Wobeser y Sierra, S.C. (Intern 1988–1992)',
                                'ICC International Court of Arbitration (Intern, 1993)',
                                'Mexican Federal Competition Commission (Deputy Legal Director 1994 -1995)',
                                'Gardner Carton Douglas, Chicago (Foreign intern 1996-1997)',
                                'Freshfields Deringer, Brussels (Associate 1997-1999)',
                                'BOCAR, S.A. de C.V. (Deputy Legal Manager 1999-2005)',
                                'Bristol Myers Squibb de Mexico, S de R.L de C.V. (Legal Director 2005-2008)',
                                'Bristol Myers Squibb Company, Princeton NJ (Deputy General Counsel Latin America, Intercontinental Region, 2008-2012)',
                                'Aggreko LLC, Houston, TX (Vice President of Commercial Risk and Head of Latin America Legal 2013-2017)',
                   ],
                socioMiembroDe: [ 'Colegio Mexicano de Abogados',
                   'Consultor Foráneo, certificado por el Tribunal Supremo del Estado de Texas',
                   'Mexican Bar Association',
                   'Foreign Legal Consultant, certified by The Supreme Court of Texas',
                   ],
                areasDePractica: [
                    'Corporativo, Contratos, Competencia, Licitaciones, Internacional, Arbitraje y Comercio Exterior',
                    'Experiencia en industrias automotriz, farmacéutica, nutricionales y energía.',
                    'Corporate, Contracts, Antitrust, Public Tenders, International law, Arbitration, Foreign Trade',
                    ' Expertise in the automotive, pharmaceutical, nutritional and energy industries',
                                ],
                imagenCuadrada: `${DiegoMaxCuadrado}`,
                estatusSocio: "Socio",
                nacSocio: "Ciudad de México. Enero 5, 1967.",
                titulacionSocio: "Admitido para ejercer, México, 1992",
                idiomaSocio: " Español, Inglés, Alemán y Francés ",
                emailSocio: " dandrade@ihma.law",
                
            },
        ],
        socioSolicitado: '',
        AreasPractica:  
            {
                id: '1',
                title: 'Areas de Practica',
                subtitle: 'Altos estándares de calidad y una amplia gama de servicios',
                description: 'Cada uno de los socios, asociados y pasantes del Bufete se Especializan en una o más de las siguientes áreas de práctica',
                areas: ['Alianzas Estrategicas ',
                        'Inversiones de capital',
                        'Ambiental',
                        'Leyes Anticorrupcion',
                        'Conversiones',
                        'Licitaciones Públicas',
                        'Competencia Economica',
                        'Litigio Administrativo',
                        'Consultoria Laboral',
                        'Litigio Laboral',
                        'Coorporativo',
                        'Marítimo',
                        'Energia',
                        'Migratorio',
                        'Financiamiento de proyectos',
                        'propiedad intelectual',
                        'Financiero',
                        'Reestructuras Financieras',
                        'Hoteles y hospitalidad',
                        'Reestructuras y Concursos',
                        'Industria Automotriz',
                        'Salud',
                        'Industria Farmaceutica',
                        'Seguridad Social',
                        'Industria Filmica',
                        'Seguros',
                        'Infraestructura',
                        'Telecomunicaciones',
                        'Inmobiliario',
                        'Transporte y Aviación'
                        ],
            },
        clientesData: [
            {
                titulo: 'Clientes Representativos',
                descripcion: 'Los abogados de IHMA son reconocidos por su innovación legal y su excelente servicio a clientes',
                clientesList: [
                    '1ero Dinero',
                    'Aegerion Pharmaceuticals',
                    'Aeromexico Cargo',
                    'Aeroservicios Especializados',
                    'Aggreko',
                    'AIM',
                    'Allrig',
                    'Alto',
                    'Amerex Brokers',
                    'AMK Healthcare',
                    'Arsenal Capital Partners',
                    'AXA',
                    'Beesion Technologies Méixco',
                    'Beyond Trust Software Inc.',
                    'Bristol-Myers Squibb de México',
                    'Cámara Mexicana de la industria de la Construcción',
                    'Capital inmobiliario',
                    'Columbia laboratorios',
                    'Combustibles Masal',
                    'Cordstrap',
                    'Corporativo Laudex',
                    'Crediempleado',
                    'Cree Ser México PF',
                    'Dade Behring',
                    'Daito Gyourui Co.',
                    'Datacard',
                    'Despegar.com',
                    'Digital Entertainment',
                    'Ding',
                    'Echostar',
                    'El Papalote Taco & Grill',
                    'Elastomeros Taza',
                    'Empacadora Sabadell',
                    'Equipos Médicos Vizcarra',
                    'Expo Pack México',
                    'Gate Gourmet',
                    'Georesearch',
                    'GIFF',
                    'Golden Gate Capital',
                    'Groke',
                    'Grupo Quiper',
                    'Grupo Rendichicas',
                    'GTA Telecom de México',
                    'Guthy Renker',
                    'Hanosil International',
                    'HIG Capital Partners',
                    'High Level Films',
                    'Hoteles City Express',
                    'Huatan',
                    'HYT Capital',
                    'Industria de la Construcción',
                    'IRASA Fortec',
                    'Jaguar',
                    'Jos A. Bank Clothiers',
                    'Joy Global México',
                    'Krispy Kreme',
                    'Doughnut Corporation',
                    'Land Rover',
                    'Lease Plan México',
                    'Lek Securites Corporation',
                    'Lemon Films',
                    'Lemon Media',
                    'Leo Pharmaceuticals',
                    'Lexus',
                    'Maasa México',
                    'Marking Services',
                    'McCormik México',
                    'McCormik Pesa',
                    'Meyn Beheer, B.V.',
                    'Movilab',
                    'MW Rental Power',
                    'Nova Condesa',
                    'Orca Mining',
                    'Packaging Machinery',
                    'Manufacturers Institute Inc.',
                    'Pandora Jewelry',
                    'PC Capital',
                    'Peco Pallet México',
                    'Pitney Bowes',
                    'Powermate Corp.',
                    'Sagem Securité',
                    'Schneider México',
                    'Siemens',
                    'Stewart Connector Systems',
                    'Sun Capital Ventures',
                    'Takeda',
                    'Tamoin',
                    'The Carlyle Group',
                    'Tower One Wireless',
                    'Toyota',
                    'Tresmontes Lucchetti México',
                    'Truelock',
                    'United Parcel Service (UPS)',
                    'WFI',
                    'Winco',
                    'About the partners'
                ]
            }
        ],
        
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
                        data={this.state.dataSocios[this.state.socioSolicitado-1]}
                        />
                        }
                        />
                        <Route exact path="/AreasDePractica" render = { () =>
                            <AreasPractica 
                            data={this.state.AreasPractica}
                            />
                        } 
                        />
                        <Route exact path="/Clientes" render= { () =>
                                <Clientes 
                                data={this.state.clientesData[0]}
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
