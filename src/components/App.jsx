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

state = 
{
  actual: 'en',
  language: {
    es: 
    {
      footer: {
        terms: 'Terminos y condiciones',
        politicy: 'Politicas de privacidad ',
        contact: 'Contacto',
        join: 'Unete a nuestras',
        social: 'Redes Sociales',
      },
      home: {
        heroDescription1: 'Consultoría',
        heroDescription2: 'Legal Internacional',
        greyDecorate: 'Un moderno y dinámico ejercicio de la profesión',
        details1a: 'fue concebido como un Bufete que ofrece servicios integrales a clientes nacionales e internacionales acostumbrados a recibir servicios legales de la más alta calidad por parte de los más grandes y destacados despachos, pero con un nivel de atención personalizada en todos los asuntos confiados a éste, que claramente lo distingue de otras firmas legales tradicionales de mayor tamaño.',
        details1b: 'Los antecedentes académicos y profesionales de los miembros del Bufete, tanto en México como en los Estados Unidos de América y Europa, permite a IHMA entender las necesidades de los clientes de una mejor manera, así como los aspectos legales que inciden en una operación internacional y brindar respuestas de calidad en tiempo oportuno de acuerdo a las expectativas de los clientes más exigentes.',
        details2a: 'Perspectiva actualizada de negocios',
        details2b: 'Uno de nuestros principales objetivos consiste en participar proactivamente en los asuntos de nuestros clientes, proporcionando asesoría práctica y confiable a sus requerimientos. La calidad de nuestros servicios está a la altura de las exigencias de un mundo globalizado y en constante transformación.',
        dir1: 'Bosque de Ciruelos 130 -501',
        dir2: 'Col. Bosques de las Lomas,',
        dir3: 'Ciudad de México, 11700',
        office: 'Oficina Ciudad de México',
      },
      equipoLegal:
      {
        title: 'Acerca de los Socios',
        details: 'Los abogados de IHMA son reconocidos por su innovación legal y su excelente servicio a clientes',
      },
      nav: 
      {
        link1: 'Sobre Nosotros',
        link2: 'Areas de Práctica',
        link3: 'Equipo Legal',
        link4: 'clientes',
        link5: 'Reconocimientos',
        link6: 'Alianzas Estrategicas',
        actual: 'Es'
      },
      dataSocios: 
      [
      {
        id: '1',
        educacionTitle: 'Educacion',
        expTitle: 'Experiencia Profesional',
        socioTitle: 'Miembro',
        areasTitle: 'Áreas de Práctica',
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
        idiomaSocio: "Idioma: Español e Inglés.",
        emailSocio: "Email: mibanez@ihma.law",    
      },
      {
        id: '2',
        nombre: 'Jorge Hoffmann Arias',
        image: `${JorgeAriasRedondo}`,
        imgTriangulo: `${triangulo}`,
        educacion: [ 'Universidad Iberoamericana (Licenciatura, 1991)',
          ],
        expProfesional: [ 'Zitro-Lex, S.A. de C.V. (1987-1989)',
            'Alvarez, Cantón y Peters, S.C. (1989-1991)',                  
            'Hoffmann y Asociados, S.C. (1991-1998)',
            'Buenfil & Hoffmann, S.C. (1998-2005',
            ],
        socioMiembroDe: [ 'Barra Mexicana, Colegio de Abogados, S.C.',
            ],
        areasDePractica: [ 'Derecho Laboral',
                            'Seguridad Social',
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
                    ],
        expProfesional: [ 'Buenfil & Hoffmann, S.C. (Pasante 1998-2000)',
                            'Comisión Federal de Competencia (Subdirector de Asuntos Jurídicos 2000-2001)',
                            'Mediador de la Corte de Los Ángeles, California (Clínica de Resolución Alternativa de Disputas 2003)',
                            'Director General Adjunto y Director General de Asuntos Jurídicos (2004-2008)',
                            'Grupo Sacbes (Socio fundador 2008-2018)',
                            
                        ],
        socioMiembroDe: [ 'Barra Mexicana, Colegio de Abogados, S.C.',
                        ],
        areasDePractica: ['Competencia Económica',
                            'Derecho Administrativo – Consultoría y litigio',
                            'Derecho Corporativo',
                            'Derecho de las Telecomunicaciones',
                            'Fusiones y Adquisiciones',
                            'Derecho Energético.',
            ],
        imagenCuadrada: `${JesusMendozaCuadrado}`,
        estatusSocio: "Socio",
        nacSocio: "Ciudad de México.Diciembre 10, 1975.",
        titulacionSocio: "Admitido para ejercer, México, 2001",
        idiomaSocio: "Lenguage: Español e Inglés.",
        emailSocio: "Email: jmendoza@ihma.law",    
      },
      {
        id: '4',
        nombre: 'Diego Andrade Max',
        image: `${DiegoMaxRedondo}`,
        imgTriangulo: `${triangulo}`,
        educacion: [ 'Universidad Iberoamericana (Licenciatura, 1992)',
                    'Universitaet Wien, Austria (Doctorado,Derecho Internacional y Derecho Comunitario,1994)',
                    'The University of Chicago Law School (LL.M, 1996)',

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
            ],
        areasDePractica: [
            'Corporativo, Contratos, Competencia, Licitaciones, Internacional, Arbitraje y Comercio Exterior',
            'Experiencia en industrias automotriz, farmacéutica, nutricionales y energía.',
                        ],
        imagenCuadrada: `${DiegoMaxCuadrado}`,
        estatusSocio: "Socio",
        nacSocio: "Ciudad de México. Enero 5, 1967.",
        titulacionSocio: "Admitido para ejercer, México, 1992",
        idiomaSocio: "Lenguage: Español, Inglés, Alemán y Francés ",
        emailSocio: "Email: dandrade@ihma.law",
      },
      ],
      socioSolicitado: '',
      AreasPractica:  
      {
        id: '1',
        enfoque: 'Nuestro Enfoque',
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
      clientesData: 
      {
        titulo: 'Clientes Representativos',
        descripcion: 'Los abogados de IHMA son reconocidos por su innovación legal y su excelente servicio a clientes',
        clientesList: 
        [
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
      },
    },
      // ----------------------------------------------------------------------------------------------------
    en: 
    {
      footer: {
        terms: 'Terms and Conditions',
        politicy: 'privacy policies',
        contact: 'Contact',
        join: 'Join our',
        social: 'Social Networks',
      },
      home: {
        heroDescription1: 'International',
        heroDescription2: 'Legal Consultancy', 
        greyDecorate: 'A modern and dynamic approach to the practice of law',
        details1a: 'was envisioned as a full service law firm servicing foreign and local clients used to receiving top quality legal services from the best and largest international law firms, but with such a personal degree of attention in all matters entrusted to it by the clients, that clearly distinguishes it from the larger traditional law firms.         ',
        details1b: 'The education and employment backgrounds of the members of the firm in Mexico as well as in the United States and Europe, allows IHMA to better understand the clients needs, the legal issues involved on the both sides of a crossborder transaction and to deliver quality and timely responses as expected by the most demanding clients.        ',
        details2a: 'Present-day business perspective',
        details2b: 'One of our main goals consists in proactive approach to our clients’ matters, providing practical and reliable advice in those matters entrusted to the Firm. The quality of our services meets the utmost demands of a globalized world in constant change.        ',
        dir1: '1095 Evergreen Circle',
        dir2: 'Suite 200 - 432',
        dir3: 'The Woodlands, TX 77380',
        office: 'Office Woodlands, Texas        ',
      },
      equipoLegal:
      {
        title: 'About the partners',
        details: 'IHMA attorneys are recognized for their legal innovation and excellent client service',
      },
      nav: 
      {
        link1: 'The Firm',
        link2: 'Practices',
        link3: 'Team',
        link4: 'Client',
        link5: 'Award',
        link6: 'Strategic Alliances',
        actual: 'En'
      },
        dataSocios: 
        [
          {
            id: '1',
            educacionTitle: 'Education',
            expTitle: 'Professional Experience',
            socioTitle: 'Member',
            areasTitle: 'Practice Areas',
            nombre: 'Mauricio Ibañez Campos',
            image: `${MauricioCamposRedondo}`,
            imgTriangulo: `${triangulo}`,
            educacion: [ 'Universidad Iberoamericana (Licenciatura, 1993)',
                          'Columbia University (LL.M., 1999)' ],
            expProfesional: [ 'Baker & McKenzie, S.C. (1990-1994)',
                            'White & Case, S.C. (1995-1997, 1999-2001)',
                            'White & Case, LLP, New York (1997-1998)',
                            'Jáuregui, Navarrete, Nader y Rojas, S.C.',
                            '(International Associated Practice with Mayer, Brown, Rowe & Maw) (2001-2004)',
                            ],
            socioMiembroDe: [ 
                            'Mexican Lawyers College',
                            'Mexican Bar Association',
                            'American Bar Association',
                            ],
            areasDePractica: [' Corporate Law, Mergers and Acquisitions, Project Finance, Private Equity, Workouts, Real Estate,      Telecommunications, Transportation, Mining, Energy.',
                            ],
            imagenCuadrada: `${MauricioCamposCuadrado}`,
            estatusSocio: "Socio",
            nacSocio: "Born Mexico City. November 8, 1969.            ",
            titulacionSocio: "Admitted, 1994, Mexico.",
            idiomaSocio: "Language: Spanish and English",
            emailSocio: "Email: mibanez@ihma.law",
              
          },
          {
            id: '2',
            nombre: 'Jorge Hoffmann Arias',
            image: `${JorgeAriasRedondo}`,
            imgTriangulo: `${triangulo}`,
            educacion: [ 'Universidad Iberoamericana (Licenciatura, 1991)',
              ],
            expProfesional: [ 'Zitro-Lex, S.A. de C.V. (1987-1989)',
                'Alvarez, Cantón y Peters, S.C. (1989-1991)',                  
                'Hoffmann y Asociados, S.C. (1991-1998)',
                'Buenfil & Hoffmann, S.C. (1998-2005',
                ],
            socioMiembroDe: [ 'Mexican Bar Association ',
                ],
            areasDePractica: [ 'Labor and Employment Law',
                                'Social Security',
                ],
            imagenCuadrada: `${JorgeAriasCuadrado}`,
            estatusSocio: "Socio",
            nacSocio: "Born Mexico City. November 7, 1967.            ",
            titulacionSocio: "Admitted, 1995, Mexico. ",
            idiomaSocio: "Languages: Spanish and English",
            emailSocio: "Email: jhoffmann@ihma.law",
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
                        ],
            expProfesional: [ 'Buenfil & Hoffmann, S.C. (Pasante 1998-2000)',
                                'Comisión Federal de Competencia (Subdirector de Asuntos Jurídicos 2000-2001)',
                                'Mediador de la Corte de Los Ángeles, California (Clínica de Resolución Alternativa de Disputas 2003)',
                                'Director General Adjunto y Director General de Asuntos Jurídicos (2004-2008)',
                                'Grupo Sacbes (Socio fundador 2008-2018)',
                                
                            ],
            socioMiembroDe: [ 'Mexican Bar Association',
                            ],
            areasDePractica: ['Antitrust Law',
                                'Administrative Law – consulting and litigation',
                                'Corporate Law',
                                'Telecommunications Law',
                                'Mergers and Acquisitions',
                                'Energy ',
                ],
            imagenCuadrada: `${JesusMendozaCuadrado}`,
            estatusSocio: "Socio",
            nacSocio: "Born Mexico City. December 10, 1975.            ",
            titulacionSocio: "Admitted, 2001, Mexico. ",
            idiomaSocio: "Languages: Spanish and English",
            emailSocio: "Email: jmendoza@ihma.law",
              
          },
          {
            id: '4',
            nombre: 'Diego Andrade Max',
            image: `${DiegoMaxRedondo}`,
            imgTriangulo: `${triangulo}`,
            educacion: [ 'Universidad Iberoamericana (J.D., 1992)',
                        'Universitaet Wien, Austria International and European EU Law, Doctorate, 1994)',
                        'The University of Chicago Law School (LL.M, 1996)',

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
            socioMiembroDe: [ 'Mexican Bar Association',
                'Foreign Legal Consultant, certified by The Supreme Court of Texas',
                ],
            areasDePractica: [
                'Corporate, Contracts, Antitrust, Public Tenders, International law, Arbitration, Foreign Trade',
                'Expertise in the automotive, pharmaceutical, nutritional and energy industries.',
                            ],
            imagenCuadrada: `${DiegoMaxCuadrado}`,
            estatusSocio: "Socio",
            nacSocio: "Born Mexico City. January 5, 1967.            ",
            titulacionSocio: "Admitted, 1992, Mexico. ",
            idiomaSocio: "Languages:  Spanish, English, German and French",
            emailSocio: "Email: dandrade@ihma.law",
              
          },
        ],
          socioSolicitado: '',
          AreasPractica:  
          {
            id: '1',
            enfoque: '',
            title: 'Practices Areas',
            subtitle: 'We focus on high quality standards and a wide range of services',
            description: 'Each one of the partners, associates and law clerks of the firm specializes in one or more of the following practices areas:',
            areas: 
            [
              'Administrative Litigation ',
              'Antitrust',
              'Automotive Industry',
              'Corporate',
              'Energy',
              'Environmental',
              'Equity Investments',
              'FCPA - UKBA investigations',
              'Film Industry',
              'Finance',
              'Financial Reestructuring',
              'Health',
              'Hotels & Hospitality',
              'Immigration',
              'Infrastructure',
              'Insurance',
              'Intellectual Property',
              'Joint Ventures',
              'Labor Consulting ',
              'Labor Litigation ',
              'Maritime',
              'Mergers & Acquisitions',
              'Pharmaceutical Industry ',
              'Project Finance',
              'Public Tenders ',
              'Real Estate',
              'Social Security',
              'Strategic Alliances',
              'Telecommunications',
              'Transportation & Aviation',
                    ],
          },
          clientesData: 
          {
            titulo: 'Representative Clients',
            descripcion: 'IHMA attorneys are recognized for their legal innovation and excellent client service',
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
          },
      },
      
    }
        
    }

    switchLanguage = () => {
      if(this.state.actual==='es'){
        return this.state.language.es
      }else if(this.state.actual==='en'){
        return this.state.language.en
      }
    }

    changeLanguage = (a) =>{
      console.log('cambiador listo',a)
      let idioma 
      if(this.state.actual==='es'){
        idioma='en'
      }else if(this.state.actual==='en'){
        idioma='es'
      }
      return this.setState({
        ...this.state,
        actual: idioma,
      })
    }

    evento = (id) =>{
        this.setState({
          language:{
            ...this.state.language,
            es:{
              ...this.state.language.es,
              socioSolicitado: `${id}`
            },
            en:{
              ...this.state.language.en,
              socioSolicitado: `${id}`
            },
            
          }
        })

        //console.log('hola el id generado es'+ this.state.socioSolicitado)
    }

    render(){
        return (
            <BrowserRouter>
                <Layout
                nav={this.switchLanguage().nav}
                changeLanguage={this.changeLanguage}
                language={this.switchLanguage()}
                >
                    <Switch>
                      <Route exact path="/ihma"  
                      render={ () => (
                        <Home 
                        language={this.switchLanguage()}
                        />
                      )
                      }
                      />
                      <Route exact path="/Equipo-Legal"
                      render={ () => 
                      <EquipoLegal 
                      leftEquipoLegal={fotoEquipoLegal} 
                      datosSocios={this.switchLanguage().dataSocios}
                      evento = {this.evento}
                      language={this.switchLanguage()}
                      />
                      }
                      />  
                      <Route exact path="/Equipo-Legal/info"
                      render={ () => 
                        
                      <Socios 
                      data={this.switchLanguage().dataSocios[this.switchLanguage().socioSolicitado-1]}
                      />
                      }
                      />
                      <Route exact path="/AreasDePractica" render = { () =>
                          <AreasPractica 
                          data={this.switchLanguage().AreasPractica}
                          />
                      } 
                      />
                      <Route exact path="/Clientes" render= { () =>
                              <Clientes 
                              data={this.switchLanguage().clientesData}
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
