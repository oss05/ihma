import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from './Layout';
import Home from '../pages/Home';
import Socios from './Socios';
import Socios2 from './Socios2';
import AreasPractica from '../pages/AreasPractica';
import EquipoLegal from '../pages/EquipoLegal';
import EquipoLegal2 from '../pages/EquipoLegal2';
import Clientes from '../pages/Clientes';
import Alianzas from '../pages/Alianzas';
import Reconocimientos from '../pages/Reconocimientos';

import fotoEquipoLegal from '../img/leftEquipoLegal.png';
import fotoEquipoLegal2 from '../img/rightEquipoLegal2.png';
import MauricioCamposRedondo from '../img/MauricioCamposRedondo.png';
import AnaGabrielaRedonda from '../img/AnaGabrielaRedonda.png';
import EduardoPulidoRedondo from '../img/EduardoPulidoRedondo.png';
import ErikaRedondo from '../img/ErikaRedondo.png';
import JhonatanRedondo from '../img/JhonatanRedondo.png';
import JosueBalderasRedondo from '../img/JosueBalderasRedondo.png';
import MariaJuliaRedondo from '../img/MariaJuliaRedondo.png';
import JorgeAriasRedondo from '../img/JorgeAriasRedondo.png';
import JesusMendozaRedondo from '../img/JesusMendozaRedondo.png';
import DiegoMaxRedondo from '../img/DiegoMaxRedondo.png';
import triangulo from '../img/triangulo.png';
import MauricioCamposCuadrado from '../img/MauricioCampos.png';
import JorgeAriasCuadrado from '../img/JorgeArias.png';
import JesusMendozaCuadrado from '../img/JesusMendoza.png';
import DiegoMaxCuadrado from '../img/DiegoMax.png';
import Maria from '../img/Maria.png';
import Eduardo from '../img/Eduardo.png';
import Jonathan from '../img/Jonathan.png';
import Josue from '../img/Josue.png';
import Ana from '../img/Ana.png';
import Erika from '../img/Erika.png';

class App extends React.Component {

  state =
    {
      actual: 'es',
      language: {
        es:
        {
          reconocimientos: {
            title: 'Reconocimientos',
            subtitle: '',
            details1: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ',
            details2: '',
            details3: '',
          },
          alianzas: {
            title: 'Alianzas Estratégicas',
            subtitle: 'Capacidades internacionales de IHMA',
            details1: 'Hoy vivimos en un mundo enfocado en los mercados globales y las transacciones comerciales modernas que abarcan elementos de diferentes jurisdicciones nacionales y extranjeras. La capacidad de práctica internacional de IHMA ayuda a los clientes a navegar estos mercados a menudo complejos e inciertos y sus sistemas legales. Ayudamos a los clientes a promover su interés comercial internacional en México y mercados relevantes. Los abogados de IHMA han estudiado y trabajado en el extranjero, hablan idiomas extranjeros y conocen diferentes culturas empresariales. Además, la Firma cuenta con una vasta red de abogados y firmas de abogados extranjeros en todo el mundo para ayudar a ésta a brindar soluciones integrales para sus clientes que desean aprovechar estos mercados globales y promover sus intereses comerciales internacionales.',
            details2: 'IHMA y Leger Ketchum & Cohoon, PLLC (LKC), una firma de abogados líder en el área de Houston, con oficinas en The Woodlands, Boerne-San Antonio y Dallas, Texas, se han asociado como parte de una alianza estratégica para manejar el comercio internacional y asuntos fronterizos tanto en Estados Unidos como en México. Al unir fuerzas en una alianza estratégica, los recursos combinados de los abogados de IHMA admitidos para ejercer en México y los abogados de LKC admitidos para ejercer en Texas y otras jurisdicciones de EE. UU., nos permite brindar asesoría legal integral e integral en cualquier asunto corporativo, comercial, laboral o de otro tipo regido por los Estados Unidos. Acuerdo Estados - México - Canadá (USMCA) que reemplazó y reemplazó al NAFTA.',
            details3: 'Después de trabajar durante casi dos décadas como Asesor Jurídico de varias empresas multinacionales importantes en las industrias automotriz, farmacéutica, nutricional, energética y de servicios públicos, manejando responsabilidades corporativas en México y América Latina, Diego Andrade Max se unió a IHMA en 2017 y encabezó nuestros esfuerzos para abrir una oficina enlace en Woodlands, Texas en 2018. El propósito de esta oficina es estar más cerca de nuestros clientes con sede en EE. UU. que hacen negocios en México. Para mas información sobre los servicios de nuestra firma aliada por favor visitar',
            details4: 'El siguiente paso ha sido establecer una alianza estratégica con una firma de Texas a raíz de los cuestionamientos constantes de nuestros clientes extranjeros que hacen negocios en México sobre el acceso a los servicios legales en Texas, así como los clientes, personas físicas mexicanas de alto poder adquisitivo que han buscado empresas en Texas. Nuestro socio, Diego Andrade maneja la alianza IHMA-LKC y divide su tiempo entre Houston y Ciudad de México.',
          },
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
          equipoLegal2:
          {
            title: 'Equipo Legal',
            details: 'Los abogados de IHMA son reconocidos por su innovación legal y su excelente servicio a clientes',
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
            link31: 'Socios',
            link32: 'Asociados',
            link4: 'Clientes',
            link5: 'Reconocimientos',
            link6: 'Alianzas Estrategicas',
            actual: 'En'
          },
          dataSocios2:
            [
              {
                id: '1',
                socioTitle: null,
                educacionTitle: 'Educación',
                expTitle: 'Experiencia Profesional',
                areasTitle: 'Áreas de Práctica',
                nombre: 'María Julia Bugnest',
                image: `${MariaJuliaRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad de Buenos Aires, (UBA), Argentina.  (2008)        ',
                ],
                expProfesional: ['Microsoft, South Cone. Argentina. (2007-2009)        ',
                  'Abeledo Gottheil Abogados. Argentina. (2009-2010)',
                  'Estudio O´Farrell Abogados. Argentina. (2010-2011)                        ',
                  'Ibáñez Maroto Scheriever & Hoffmann (2012-2020)                        ',
                ],
                areasDePractica: [
                  'Derecho Corporativo, Fusiones y Adquisiciones.',
                ],
                imagenCuadrada: `${Maria}`,
                estatusSocio: "Asociada",
                nacSocio: "Buenos Aires,Argentina. Julio 15, 1983.",
                titulacionSocio: "Admitido para ejercer, 2008",
                idiomaSocio: "Español, Inglés,",
                emailSocio: " jbugnest@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Asociados/MariaJuliaBugnest.vcf"
              },
              {
                id: '2',
                socioTitle: null,
                educacionTitle: 'Educación',
                expTitle: 'Experiencia Profesional',
                areasTitle: 'Áreas de Práctica',
                nombre: 'Eduardo Chávez Pulido',
                image: `${EduardoPulidoRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad Tecnológica de México (J.D. 2002)',
                ],
                expProfesional: ['Martín del Campo y Asociados, S.C. (2002-2003)',
                  'Cardoso y Asociados, S.C. (2003-2004)',
                  'Buenfil & Hoffmann (2004-2006)',
                  'Ibáñez, Maroto, Scheriever & Hoffmann (2006-2020)',
                ],
                areasDePractica: ['Consultoría y litigio laboral', ' Seguridad Social',
                ],
                imagenCuadrada: `${Eduardo}`,
                estatusSocio: "Asociado",
                nacSocio: "Ciudad de México. Enero 31, 1981.",
                titulacionSocio: "Admitido para ejercer, México, 2003",
                idiomaSocio: "Idioma: Español e Inglés (Básico).",
                emailSocio: " echavez@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Asociados/EduardoChavezPulido.vcf"
              },
              {
                id: '3',
                socioTitle: null,
                educacionTitle: 'Educación',
                expTitle: 'Experiencia Profesional',
                areasTitle: 'Áreas de Práctica',
                nombre: 'Josué Hernández Balderas ',
                image: `${JosueBalderasRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad Nacional Autónoma de México - UNAM (J.D., 2017)        ',
                ],
                expProfesional: ['Zavala, Zavala y Asociados, S.C. (2017-2020)        ',
                ],
                areasDePractica: [
                  'Derecho Administrativo, Familiar, Civil, Penal, Mercantil, Consultoría y litigio laboral Seguridad Social',
                ],
                imagenCuadrada: `${Josue}`,
                estatusSocio: "Asociado",
                nacSocio: "Ciudad de México, Junio 24, 1983.",
                titulacionSocio: "Admitido para ejercer, México, 2010",
                idiomaSocio: "Lenguage: Español, Inglés(Intermedio), Francés(básico) ",
                emailSocio: "jretana@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Asociados/JosueHernandezBalderas.vcf"

              },
              {
                id: '4',
                educacionTitle: 'Educación',
                socioTitle: null,
                expTitle: 'Experiencia Profesional',
                areasTitle: 'Áreas de Práctica',
                nombre: 'Ana Gabriela Núñez Rodríguez',
                image: `${AnaGabrielaRedonda}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad Nacional Autónoma de México (Licenciatura, 2013)',
                ],
                expProfesional: ['Grupo A.D.O. (Autobuses de Oriente) (2010-2011)',
                  'Ordoñez Abogados, S.C. (2011-2011)',
                  'Ibáñez Maroto Scheriever & Hoffmann (2012-2018)',
                  'Rechtlich & Gentan I, S.C. – MOWAT (2018-2020)',
                ],
                areasDePractica: ['Consultoría y litigio laboral', 'Seguridad Social',
                ],
                imagenCuadrada: `${Ana}`,
                estatusSocio: "Asociada",
                nacSocio: "Ciudad de México. Noviembre 2, 1990.",
                titulacionSocio: "Admitida para ejercer, 2016, México",
                idiomaSocio: "Idioma: Español e Inglés.",
                emailSocio: " anunez@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Asociados/AnaGabrielaNunezRodriguez.vcf"
              },
              {
                id: '5',
                socioTitle: null,
                educacionTitle: 'Educación',
                expTitle: 'Experiencia Profesional',
                areasTitle: 'Áreas de Práctica',
                nombre: 'Jonathan Retana Pérez',
                image: `${JhonatanRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad de las Américas - UDLA (J.D., 2006)',
                ],
                expProfesional: ['Ortiz Noriega y González, S.C. (2005-2011)',
                  'Pronósticos para la Asistencia Pública (2011-2014)',
                  'Naviera Integral, S.A. de C.V. (2014-2017)                        ',
                  'Grupo Sacbes, S.C. (2017-2020)                        ',
                ],
                areasDePractica: [
                  'Derecho Administrativo, Civil, Mercantil, Corporativo y Propiedad Intelectual',
                ],
                imagenCuadrada: `${Jonathan}`,
                estatusSocio: "Asociado",
                nacSocio: "Ciudad de México. Junio 24, 1983.",
                titulacionSocio: "Admitido para ejercer, México, 2010",
                idiomaSocio: "Lenguage: Español, Inglés y Francés(Básico) ",
                emailSocio: " jretana@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Asociados/JonathanRetanaPerez.vcf"
              },
              {
                id: '6',
                socioTitle: 'Miembro',
                educacionTitle: 'Educación',
                expTitle: 'Experiencia Profesional',
                areasTitle: 'Áreas de Práctica',
                nombre: 'Erika Velázquez Blakely',
                image: `${ErikaRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad Nacional Autónoma de México (Licenciatura 1997)',
                  'Universidad Nacional Autónoma de México / Diplomado en Derecho Corporativo (2019)',
                ],
                expProfesional: ['BBufete De Presno y Asociados, S.C. (1994-1999)        ',
                  'Buenfil & Hoffmann, S.C. (1999-2004)                            ',
                  'Ibáñez, Maroto, Schriever & Hoffmann, S.C. (2004-2020)                            ',

                ],
                socioMiembroDe: ['Barra Mexicana, Colegio de Abogados, A.C.',
                ],
                areasDePractica: ['Derecho Laboral consultoría y litigio Auditoría legal Seguridad Social, Corporativo-laboral Laboral.',],
                imagenCuadrada: `${Erika}`,
                estatusSocio: "Asociada",
                nacSocio: "Ciudad de México.Abril 4, 1974.",
                titulacionSocio: "Admitida para ejercer, México, 1998",
                idiomaSocio: "Lenguage: Español e Inglés.",
                emailSocio: " ehoffmann@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Asociados/ErikaVelazquezBlakely.vcf"
              },
            ],
          dataSocios:
            [
              {
                id: '1',
                educacionTitle: 'Educación',
                expTitle: 'Experiencia Profesional',
                socioTitle: 'Miembro',
                areasTitle: 'Áreas de Práctica',
                nombre: 'Mauricio Ibáñez Campos',
                image: `${MauricioCamposRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad Iberoamericana (Licenciatura, 1993)',
                  'Columbia University (Maestría en Derecho, 1999)',
                ],
                expProfesional: [
                  'Baker & McKenzie, S.C. (1990-1994)',
                  'White & Case, S.C. (1995-1997, 1999-2001)',
                  'White & Case, LLP, New York (1997-1998)',
                  'Jáuregui, Navarrete, Nader y Rojas, S.C.',
                  '(Práctica Internacional Asociada con Mayer, Brown,Rowe & Maw), (2001-2004)',
                ],
                socioMiembroDe: [
                  'Colegio Mexicano de Abogados',
                  'The Americas Society',
                ],
                areasDePractica: [
                  'Derecho Corporativo, Fondos Privados, Fusiones y Adquisiciones, Financiamiento de Proyectos, Reestructuras, Telecomunicaciones, Transporte, Inmobiliario, Minería, Energía.'
                ],
                imagenCuadrada: `${MauricioCamposCuadrado}`,
                estatusSocio: "Socio",
                nacSocio: "Ciudad de México. Noviembre 8, 1969.",
                titulacionSocio: "Admitido para ejercer, México, 1994",
                idiomaSocio: "Idioma: Español e Inglés.",
                emailSocio: " mibanez@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Socios/MauricioIbanezCampos.vcf"
              },
              {
                id: '2',
                educacionTitle: 'Educación',
                expTitle: 'Experiencia Profesional',
                socioTitle: 'Miembro',
                areasTitle: 'Áreas de Práctica',
                nombre: 'Jorge Hoffmann Arias',
                image: `${JorgeAriasRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad Iberoamericana (Licenciatura, 1991)'],
                expProfesional: [
                  'Zitro-Lex, S.A. de C.V. (1987-1989)',
                  'Alvarez, Cantón y Peters, S.C. (1989-1991)',
                  'Hoffmann y Asociados, S.C. (1991-1998)',
                  'Buenfil & Hoffmann, S.C. (1998-2005)',
                ],
                socioMiembroDe: [
                  "Barra Mexicana, Colegio de Abogados, S.C.",
                ],
                areasDePractica: [
                  "Derecho Laboral",
                  "Seguridad Social"
                ],
                imagenCuadrada: `${JorgeAriasCuadrado}`,
                estatusSocio: "Socio",
                nacSocio: "Ciudad de México. Noviembre 7, 1967.",
                titulacionSocio: "Admitido para ejercer, México, 1995",
                idiomaSocio: "Idioma: Español e Inglés.",
                emailSocio: "jhoffmann@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Socios/JorgeHoffmannArias.vcf"
              },
              {
                id: '3',
                educacionTitle: 'Educación',
                expTitle: 'Experiencia Profesional',
                socioTitle: 'Miembro',
                areasTitle: 'Áreas de Práctica',
                nombre: 'Jesús Mendoza Henríquez',
                image: `${JesusMendozaRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad Anáhuac (Licenciatura, 2000)',
                  'Pepperdine University (Juris Doctor – EEUU)',
                  'Strauss Institute for Dispute Resolution, Pepperdine',
                  'University (Maestría en Resolución Alternativa de Disputas Internacionales 2004)',
                ],
                expProfesional: [
                  'Buenfil & Hoffmann, S.C. (Pasante 1998-2000)',
                  'Comisión Federal de Competencia Económica (Director General Adjunto y Director General de Asuntos Jurídicos (2004-2008) )',
                  'Mediador de la Corte de Los Ángeles, California (Clínica de Resolución Alternativa de Disputas 2003)',
                  'Grupo Sacbes (Socio fundador 2008-2018)',

                ],
                socioMiembroDe: ['Barra Mexicana, Colegio de Abogados, S.C.',
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
                emailSocio: "jmendoza@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Socios/JesusMendozaHenriquez.vcf"
              },
              {
                id: '4',
                educacionTitle: 'Educación',
                expTitle: 'Experiencia Profesional',
                socioTitle: 'Miembro',
                areasTitle: 'Áreas de Práctica',
                nombre: 'Diego Andrade Max',
                image: `${DiegoMaxRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad Iberoamericana (Licenciatura, 1992)',
                  'Universitaet Wien, Austria (Doctorado,Derecho Internacional y Derecho Comunitario,1994)',
                  'The University of Chicago Law School (LL.M, 1996)',

                ],
                expProfesional: [
                  'Von Wobeser y Sierra, S.C. (Pasante 1988–1992)',
                  'ICC International Court of Arbitration (Pasante, 1993)',
                  'Comision Federal de Competencia (Sub-Director Jurídico 1994 -1995)',
                  'Gardner Carton Douglas, Chicago (Pasante extranjero 1996-1997)',
                  'Freshfields Deringer, Bruselas UE (Asociado 1997-1999)',
                  'BOCAR, S.A. de C.V. (Sub Gerente Legal 1999-2005)',
                  'Bristol Myers Squibb de Mexico, S. de R.L. de C.V. (Director Jurídico 2005-2008)',
                  'Bristol Myers Squibb Company, Princeton NJ (Director Juródico Adjunto para Latinoamérica, Región Intercontinental, 2008-2012)',
                  'Aggreko LLC, Houston TX (Vice Presidente Riesgo Comercial y Legal América Latina 2013-2017)',
                ],
                socioMiembroDe: [
                  "Barra Mexicana, Colegio de Abogados",
                  "Consultor Foráneo, certificado por el Tribunal Supremo del Estado de Texas"
                ],
                areasDePractica: ["Corporativo, Contratos, Competencia, Licitaciones, Internacional, Arbitraje y  Comercio Exterior. Experiencia en industrias automotriz, farmacéutica, nutricionales y energía. "],
                imagenCuadrada: `${DiegoMaxCuadrado}`,
                estatusSocio: "Socio",
                nacSocio: "Ciudad de Nueva York. Enero 5, 1967.",
                titulacionSocio: "Admitido para ejercer, México, 1992.",
                idiomaSocio: " Español, Inglés, Alemán y Francés",
                emailSocio: " dandrade@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Socios/DiegoAndradeMax.vcf"
              },
            ],
          socioSolicitado: "",
          AreasPractica: {
            id: "1",
            enfoque: "Nuestro Enfoque:",
            title: "Areas de Práctica",
            subtitle:
              "Altos estándares de calidad y una amplia gama de servicios",
            description:
              "Cada uno de los socios, asociados y pasantes del Bufete se Especializan en una o más de las siguientes áreas de práctica:",
            areas: [
              "Alianzas Estratégicas ",
              "Leyes Anticorrupción",
              "Ambiental",
              "Licitaciones Públicas",
              "Conversiones",
              "Litigio Administrativo",
              "Competencia Económica",
              "Litigio Laboral",
              "Consultoría Laboral",
              "Marítimo",
              "Corporativo",
              "Migratorio",
              "Cumplimiento ESG",
              "Minería",
              "Energía",
              "Propiedad Intelectual",
              "Financiamiento de proyectos",
              "Reestructuras Financieras",
              "Financiero",
              "Reestructuras y Concursos",
              "Hoteles y Hospitalidad",
              "Salud",
              "Industria Automotriz",
              "Seguridad Social",
              "Industria Farmacéutica",
              "Seguros",
              "Industria Fílmica",
              "Telecomunicaciones",
              "Infraestructura",
              "Transporte y Aviación",
              "Inmobiliario",
              "Verificación de Antecedentes",
              "Inversiones de Capital",
            ],
          },
          clientesData: {
            titulo: "Clientes Representativos",
            descripcion:
              "Los abogados de IHMA son reconocidos por su innovación legal y su excelente servicio a clientes",
            clientesList: [
              "1ero Dinero",
              "Aegerion Pharmaceuticals",
              "Aeromexico Cargo",
              "Aeroservicios Especializados",
              "Aggreko",
              "AIM",
              "Allrig",
              "Alto",
              "Amerex Brokers",
              "AMK Healthcare",
              "Arsenal Capital Partners",
              "AXA",
              "Beesion Technologies Méixco",
              "Beyond Trust Software Inc.",
              "Bristol-Myers Squibb de México",
              "Cámara Mexicana de la industria de la Construcción",
              "Capital inmobiliario",
              "Columbia laboratorios",
              "Combustibles Masal",
              "Cordstrap",
              "Corporativo Laudex",
              "Crediempleado",
              "Cree Ser México PF",
              "Dade Behring",
              "Daito Gyourui Co.",
              "Datacard",
              "Despegar.com",
              "Digital Entertainment",
              "Ding",
              "Echostar",
              "El Papalote Taco & Grill",
              "Elastomeros Taza",
              "Empacadora Sabadell",
              "Equipos Médicos Vizcarra",
              "Expo Pack México",
              "Gate Gourmet",
              "Georesearch",
              "GIFF",
              "Golden Gate Capital",
              "Groke",
              "Grupo Quiper",
              "Grupo Rendichicas",
              "GTA Telecom de México",
              "Guthy Renker",
              "Hanosil International",
              "HIG Capital Partners",
              "High Level Films",
              "Hoteles City Express",
              "Huatan",
              "HYT Capital",
              "Industria de la Construcción",
              "IRASA Fortec",
              "Jaguar",
              "Jos A. Bank Clothiers",
              "Joy Global México",
              "Krispy Kreme",
              "Doughnut Corporation",
              "Land Rover",
              "Lease Plan México",
              "Lek Securites Corporation",
              "Lemon Films",
              "Lemon Media",
              "Leo Pharmaceuticals",
              "Lexus",
              "Maasa México",
              "Marking Services",
              "McCormik México",
              "McCormik Pesa",
              "Meyn Beheer, B.V.",
              "Movilab",
              "MW Rental Power",
              "Nova Condesa",
              "Orca Mining",
              "Packaging Machinery",
              "Manufacturers Institute Inc.",
              "Pandora Jewelry",
              "PC Capital",
              "Peco Pallet México",
              "Pitney Bowes",
              "Powermate Corp.",
              "Sagem Securité",
              "Schneider México",
              "Siemens",
              "Stewart Connector Systems",
              "Sun Capital Ventures",
              "Takeda",
              "Tamoin",
              "The Carlyle Group",
              "Tower One Wireless",
              "Toyota",
              "Tresmontes Lucchetti México",
              "Truelock",
              "United Parcel Service (UPS)",
              "WFI",
              "Winco",
              "About the partners",
            ],
          },
        },
        // ----------------------------------------------------------------------------------------------------
        en:
        {
          reconocimientos: {
            title: 'Awards',
            subtitle: '',
            details1: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ',
            details2: '',
            details3: '',
          },
          alianzas: {
            title: 'Strategic Alliances',
            subtitle: 'IHMA International Capabilities',
            details1: 'Today we live in a world focused on global markets and modern business transactions that encompass elements of different domestic and foreign jurisdictions.  The IHMA International Practice capability helps clients navigate these often complex and uncertain markets and their legal systems.  We help clients to promote their international business interest in Mexico and relevant markets.  IHMA attorneys have studied and worked abroad, speak foreign languages, and know different business cultures.  In addition, the Firm has a vast network of lawyers and foreign law firms around the globe to assist the firm in providing one-stop shop solutions for its clients wanting to take advantage of these global markets and promote their international business interests.',
            details2: 'IHMA and Leger Ketchum & Cohoon, PLLC (LKC), a leading law firm in the Houston area with offices in The Woodlands, Boerne-San Antonio and Dallas, Texas have teamed up as part of a strategic alliance to handle international trade and cross-border matters in both the US and Mexico.  By joining forces in strategic alliance, the combined resources of IHMA attorneys admitted in Mexico and LKC lawyers admitted in Texas and other US jurisdictions, allows us to provide integrated and comprehensive legal advice in any corporate, trade, labor or other matter governed by the United States - Mexico - Canada Agreement (USMCA) that superseded and replaced NAFTA.  ',
            details3: 'After working for almost two decades as General Counsel for several major multinational companies in the automotive, pharmaceutical, nutritional, energy and utility industries managing corporate responsibilities in Mexico and Latin America, Diego Andrade Max joined IHMA in 2017 and led our efforts to open a liaison office in the Woodlands, Texas in 2018.  The purpose of this office is to be closer to our US based clients doing business in Mexico.',
            details4: 'The next step has resulted in a strategic alliance with a Texas firm because our foreign clients doing business in Mexico often inquired about access to services in Texas and Mexican high net-worth individual clients have pursued ventures in Texas.  Our partner, Diego Andrade manages the IHMA-LKC alliance and splits his time between Houston and Mexico City. '

          },
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
            title: 'Legal Team',
            details: 'IHMA attorneys are recognized for their legal innovation and excellent client service',
          },
          equipoLegal2:
          {
            title: 'Legal Team',
            details: 'IHMA attorneys are recognized for their legal innovation and excellent client service',
          },
          nav:
          {
            link1: 'The Firm',
            link2: 'Practices',
            link3: 'Team',
            link31: 'Partners',
            link32: 'Associates',
            link4: 'Clients',
            link5: 'Awards',
            link6: 'Strategic Alliances',
            actual: 'Sp'
          },
          dataSocios2:
            [
              {
                id: '1',
                educacionTitle: 'Education',
                expTitle: 'Professional Experience',
                socioTitle: null,
                areasTitle: 'Practice Areas',
                nombre: 'María Julia Bugnest',
                image: `${MariaJuliaRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad de Buenos Aires, (UBA), Argentina.  (2008)        ',
                ],
                expProfesional: ['Microsoft, South Cone. Argentina. (2007-2009)        ',
                  'Abeledo Gottheil Abogados. Argentina. (2009-2010)',
                  'Estudio O´Farrell Abogados. Argentina. (2010-2011)                        ',
                  'Ibáñez Maroto Scheriever & Hoffmann (2012-2020)                        ',
                ],
                areasDePractica: [
                  'Corporate Law, Mergers and Acquisitions.',
                ],
                imagenCuadrada: `${Maria}`,
                estatusSocio: "Associate",
                nacSocio: "Buenos Aires, Argentina. June 15, 1983",
                titulacionSocio: "Admitted, 2008.",
                idiomaSocio: "Lenguage: Spanish, English ",
                emailSocio: " jbugnest@ihma.law ",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Asociados/MariaJuliaBugnest.vcf"
              },
              {
                id: '2',
                educacionTitle: 'Education',
                expTitle: 'Professional Experience',
                socioTitle: null,
                areasTitle: 'Practice Areas',
                nombre: 'Eduardo Chávez Pulido',
                image: `${EduardoPulidoRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad Tecnológica de México (J.D. 2002)',
                ],
                expProfesional: ['Martín del Campo y Asociados, S.C. (2002-2003)',
                  'Cardoso y Asociados, S.C. (2003-2004)',
                  'Buenfil & Hoffmann (2004-2006)',
                  'Ibáñez, Maroto, Scheriever & Hoffmann (2006-2020)',
                ],
                areasDePractica: ['Administrative Law, Family Law, Civil Law, Criminal Law, Commercial Law, Labor and Employment Law, Social Security.',
                ],
                imagenCuadrada: `${Eduardo}`,
                estatusSocio: "Associate",
                nacSocio: "Born Mexico City..            ",
                titulacionSocio: "Admitted, 2003, Mexico. ",
                idiomaSocio: "Languages: Spanish and English (Basic).",
                emailSocio: " echavez@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Asociados/EduardoChavezPulido.vcf"
              },
              {
                id: '3',
                educacionTitle: 'Education',
                expTitle: 'Professional Experience',
                socioTitle: null,
                areasTitle: 'Practice Areas',
                nombre: 'Josué Hernández Balderas ',
                image: `${JosueBalderasRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['National Autonomous University of México - UNAM (J.D., 2017)',
                ],
                expProfesional: ['Zavala, Zavala y Asociados, S.C. (2017-2020)        ',
                ],
                areasDePractica: [
                  'Administrative Law, Family Law, Civil Law, Criminal Law, Commercial Law, Labor and Employment Law, Social Security.',
                ],
                imagenCuadrada: `${Josue}`,
                estatusSocio: "Associate",
                nacSocio: "Mexico City, June 24, 1983.",
                titulacionSocio: "Admitted, 2010, Mexico.            ",
                idiomaSocio: "Lenguage: Spanish, English (middle) and French (basic)",
                emailSocio: "jretana@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Asociados/JosueHernandezBalderas.vcf"


              },
              {
                id: '4',
                educacionTitle: 'Education',
                expTitle: 'Professional Experience',
                socioTitle: null,
                areasTitle: 'Practice Areas',
                nombre: 'Ana Gabriela Núñez Rodríguez',
                image: `${AnaGabrielaRedonda}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad Nacional Autónoma de México (Licenciatura, 2013)',
                ],
                expProfesional: ['Grupo A.D.O. (Autobuses de Oriente) (2010-2011)',
                  'Ordoñez Abogados, S.C. (2011-2011)',
                  'Ibáñez Maroto Scheriever & Hoffmann (2012-2018)',
                  'Rechtlich & Gentan I, S.C. – MOWAT (2018-2020)',
                ],
                areasDePractica: ['Labor and Employment Law', 'Social Security',
                ],
                imagenCuadrada: `${Ana}`,
                estatusSocio: "Associate",
                nacSocio: "Born Mexico City. November 2, 1990.            ",
                titulacionSocio: "Admitted, 2016, Mexico.",
                idiomaSocio: "Language: Spanish and English(basic)",
                emailSocio: "  anunez@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Asociados/AnaGabrielaNunezRodriguez.vcf"


              },
              {
                id: '5',
                educacionTitle: 'Education',
                expTitle: 'Professional Experience',
                socioTitle: null,
                areasTitle: 'Practice Areas',
                nombre: 'Jonathan Retana Pérez',
                image: `${JhonatanRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad de las Américas - UDLA (J.D., 2006)',
                ],
                expProfesional: ['Ortiz Noriega y González, S.C. (2005-2011)',
                  'Pronósticos para la Asistencia Pública (2011-2014)',
                  'Naviera Integral, S.A. de C.V. (2014-2017)                        ',
                  'Grupo Sacbes, S.C. (2017-2020)                        ',
                ],
                areasDePractica: [
                  'Administrative law, Civil Law, Corporate and Intellectual Property',
                ],
                imagenCuadrada: `${Jonathan}`,
                estatusSocio: "Associate",
                nacSocio: "Born Mexico City. June 24th, 1983.            ",
                titulacionSocio: "Admitted, 2010, Mexico. ",
                idiomaSocio: "Languages:  Spanish, English, and French(basic)",
                emailSocio: " jretana@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Asociados/JonathanRetanaPerez.vcf"
              },
              {
                id: '6',
                educacionTitle: 'Education',
                expTitle: 'Professional Experience',
                socioTitle: 'Member',
                areasTitle: 'Practice Areas',
                nombre: 'Erika Velázquez Blakely',
                image: `${ErikaRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ['Universidad Nacional Autónoma de México (Licenciatura 1997)',
                  'Universidad Nacional Autónoma de México / Diplomado en Derecho Corporativo (2019)',
                ],
                expProfesional: ['BBufete De Presno y Asociados, S.C. (1994-1999)        ',
                  'Buenfil & Hoffmann, S.C. (1999-2004)                            ',
                  'Ibáñez, Maroto, Schriever & Hoffmann, S.C. (2004-2020)                            ',
                ],
                socioMiembroDe: ['American Bar Association',
                ],
                areasDePractica: ['Labor and Employment Law consulting and litigation, legal auditing, Social Security, Corporate- Labor.',
                ],
                imagenCuadrada: `${Erika}`,
                estatusSocio: "Associate",
                nacSocio: "Born Mexico City. April 4, 1974.            ",
                titulacionSocio: "Admitted, 1998, Mexico. ",
                idiomaSocio: "Languages: Spanish and English",
                emailSocio: " ehoffmann@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Asociados/ErikaVelazquezBlakely.vcf"
              },
            ],
          dataSocios:
            [
              {
                id: "1",
                educacionTitle: "Education",
                expTitle: "Professional Experience",
                socioTitle: "Member",
                areasTitle: "Practice Areas",
                nombre: "Mauricio Ibáñez Campos",
                image: `${MauricioCamposRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: [
                  "Universidad Iberoamericana (Licenciatura, 1993)",
                  "Columbia University (LL.M., 1999)",
                ],
                expProfesional: [
                  "Baker & McKenzie, S.C. (1990-1994)",
                  "White & Case, S.C. (1995-1997, 1999-2001)",
                  "White & Case, LLP, New York (1997-1998)",
                  "Jáuregui, Navarrete, Nader y Rojas, S.C.",
                  "(International Associated Practice with Mayer, Brown, Rowe & Maw) (2001-2004)",
                ],
                socioMiembroDe: [
                  "Mexican Lawyers College",
                ],
                areasDePractica: [
                  " Corporate Law, Mergers and Acquisitions, Project Finance, Private Equity, Workouts, Real Estate,      Telecommunications, Transportation, Mining, Energy.",
                ],
                imagenCuadrada: `${MauricioCamposCuadrado}`,
                estatusSocio: "Partner",
                nacSocio: "Born Mexico City. November 8, 1969.            ",
                titulacionSocio: "Admitted, 1994, Mexico.",
                idiomaSocio: "Language: Spanish and English",
                emailSocio: " mibanez@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Socios/MauricioIbanezCampos.vcf"
              },
              {
                id: '2',
                educacionTitle: 'Education',
                expTitle: 'Professional Experience',
                socioTitle: 'Member',
                areasTitle: 'Practice Areas',
                nombre: 'Jorge Hoffmann Arias',
                image: `${JorgeAriasRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: ["Universidad Iberoamericana (Licenciatura, 1991)"],
                expProfesional: [
                  "Zitro-Lex, S.A. de C.V. (1987-1989)",
                  "Alvarez, Cantón y Peters, S.C. (1989-1991)",
                  "Hoffmann y Asociados, S.C. (1991-1998)",
                  "Buenfil & Hoffmann, S.C. (1998-2005)",
                ],
                socioMiembroDe: ["Mexican Bar Association"],
                areasDePractica: ["Labor and Employment Law", "Social Security"],
                imagenCuadrada: `${JorgeAriasCuadrado}`,
                estatusSocio: "Partner",
                nacSocio: "Born Mexico City. November 7, 1967.            ",
                titulacionSocio: "Admitted, 1995, Mexico. ",
                idiomaSocio: "Languages: Spanish and English",
                emailSocio: " jhoffmann@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Socios/JorgeHoffmannArias.vcf"
              },
              {
                id: '3',
                educacionTitle: 'Education',
                expTitle: 'Professional Experience',
                socioTitle: 'Member',
                areasTitle: 'Practice Areas',
                nombre: 'Jesús Mendoza Henríquez',
                image: `${JesusMendozaRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: [
                  "Universidad Anáhuac (Licenciatura, 2000)",
                  "Pepperdine University (Juris Doctor – EEUU)",
                  "Strauss Institute for Dispute Resolution, Pepperdine",
                  "University (Maestría en Resolución Alternativa de Disputas Internacionales 2004)",
                ],
                expProfesional: [
                  "Buenfil & Hoffmann, S.C. (Clerk 1998-2000) ",
                  "Federal Competition Commission (Mexico, Legal Affairs Subdirector 2000-2001) ",
                  "Court Mediator Los Angeles County (Dispute Resolution Clinic Pepperdine University, 2003) ",
                  "Deputy General Counsel and General Counsel (2004-2008) ",
                  "Grupo Sacbes (Partner 2008-2018)",
                ],
                socioMiembroDe: ["Mexican Bar Association"],
                areasDePractica: [
                  "Antitrust Law",
                  "Administrative Law – consulting and litigation",
                  "Corporate Law",
                  "Telecommunications Law",
                  "Mergers and Acquisitions",
                  "Energy ",
                ],
                imagenCuadrada: `${JesusMendozaCuadrado}`,
                estatusSocio: "Partner",
                nacSocio: "Born Mexico City. December 10, 1975.            ",
                titulacionSocio: "Admitted, 2001, Mexico. ",
                idiomaSocio: "Languages: Spanish and English",
                emailSocio: " jmendoza@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Socios/JesusMendozaHenriquez.vcf"
              },
              {
                id: '4',
                educacionTitle: 'Education',
                expTitle: 'Professional Experience',
                socioTitle: 'Member',
                areasTitle: 'Practice Areas',
                nombre: 'Diego Andrade Max',
                image: `${DiegoMaxRedondo}`,
                imgTriangulo: `${triangulo}`,
                educacion: [
                  "Universidad Iberoamericana (J.D., 1992)",
                  "Universitaet Wien, Austria International and European EU Law, Doctorate, 1994)",
                  "The University of Chicago Law School (LL.M, 1996)",
                ],
                expProfesional: [
                  "Von Wobeser y Sierra, S.C. (Intern 1988–1992)",
                  "ICC International Court of Arbitration (Intern, 1993)",
                  "Mexican Federal Competition Commission (Deputy Legal Director 1994 -1995)",
                  "Gardner Carton Douglas, Chicago (Foreign intern 1996-1997)",
                  "Freshfields Deringer, Brussels (Associate 1997-1999)",
                  "BOCAR, S.A. de C.V. (Deputy Legal Manager 1999-2005)",
                  "Bristol Myers Squibb de Mexico, S de R.L de C.V. (Legal Director 2005-2008)",
                  "Bristol Myers Squibb Company, Princeton NJ (Deputy General Counsel Latin America, Intercontinental Region, 2008-2012)",
                  "Aggreko LLC, Houston, TX (Vice President of Commercial Risk and Head of Latin America Legal 2013-2017)",
                ],
                socioMiembroDe: [
                  "Mexican Bar Association",
                  "Foreign Legal Consultant, certified by The Supreme Court of Texas",
                ],
                areasDePractica: [
                  "Corporate, Contracts, Antitrust, Public Tenders, International law, arbitration, Foreign Trade. Expertise in the automotive, pharmaceutical, nutritional and energy industries.",
                ],
                imagenCuadrada: `${DiegoMaxCuadrado}`,
                estatusSocio: "Partner",
                nacSocio: "Born in New York City. January 5, 1967.            ",
                titulacionSocio: "Admitted, 1992, Mexico. ",
                idiomaSocio: "Languages:  Spanish, English, German and French",
                emailSocio: " dandrade@ihma.law",
                vCard: "https://s3-us-west-1.amazonaws.com/ihma.law/VCards/Socios/DiegoAndradeMax.vcf"
              },
            ],
          socioSolicitado: "",
          AreasPractica: {
            id: "1",
            enfoque: "",
            title: "Practices Areas",
            subtitle:
              "We focus on high quality standards and a wide range of services",
            description:
              "Each one of the partners, associates and law clerks of the firm specializes in one or more of the following practices areas:",
            areas: [
              "Administrative Litigation ",
              "Insurance",
              "Antitrust",
              "Intellectual Property",
              "Automotive Industry",
              "Joint Ventures",
              "Background Check",
              "Labor Consulting ",
              "Compliance ESG",
              "Labor Litigation ",
              "Corporate",
              "Maritime",
              "Energy",
              "Mining",
              "Environmental",
              "Mergers & Acquisitions",
              "Equity Investments",
              "Pharmaceutical Industry ",
              "FCPA - UKBA investigations",
              "Project Finance",
              "Film Industry",
              "Public Tenders ",
              "Finance",
              "Real Estate",
              "Financial Reestructuring",
              "Social Security",
              "Health",
              "Strategic Alliances",
              "Hotels & Hospitality",
              "Telecommunications",
              "Immigration",
              "Transportation & Aviation",
              "Infrastructure",
            ],
          },
          clientesData: {
            titulo: "Representative Clients",
            descripcion:
              "IHMA attorneys are recognized for their legal innovation and excellent client service",
            clientesList: [
              "1ero Dinero",
              "Aegerion Pharmaceuticals",
              "Aeromexico Cargo",
              "Aeroservicios Especializados",
              "Aggreko",
              "AIM",
              "Allrig",
              "Alto",
              "Amerex Brokers",
              "AMK Healthcare",
              "Arsenal Capital Partners",
              "AXA",
              "Beesion Technologies Méixco",
              "Beyond Trust Software Inc.",
              "Bristol-Myers Squibb de México",
              "Cámara Mexicana de la industria de la Construcción",
              "Capital inmobiliario",
              "Columbia laboratorios",
              "Combustibles Masal",
              "Cordstrap",
              "Corporativo Laudex",
              "Crediempleado",
              "Cree Ser México PF",
              "Dade Behring",
              "Daito Gyourui Co.",
              "Datacard",
              "Despegar.com",
              "Digital Entertainment",
              "Ding",
              "Echostar",
              "El Papalote Taco & Grill",
              "Elastomeros Taza",
              "Empacadora Sabadell",
              "Equipos Médicos Vizcarra",
              "Expo Pack México",
              "Gate Gourmet",
              "Georesearch",
              "GIFF",
              "Golden Gate Capital",
              "Groke",
              "Grupo Quiper",
              "Grupo Rendichicas",
              "GTA Telecom de México",
              "Guthy Renker",
              "Hanosil International",
              "HIG Capital Partners",
              "High Level Films",
              "Hoteles City Express",
              "Huatan",
              "HYT Capital",
              "Industria de la Construcción",
              "IRASA Fortec",
              "Jaguar",
              "Jos A. Bank Clothiers",
              "Joy Global México",
              "Krispy Kreme",
              "Doughnut Corporation",
              "Land Rover",
              "Lease Plan México",
              "Lek Securites Corporation",
              "Lemon Films",
              "Lemon Media",
              "Leo Pharmaceuticals",
              "Lexus",
              "Maasa México",
              "Marking Services",
              "McCormik México",
              "McCormik Pesa",
              "Meyn Beheer, B.V.",
              "Movilab",
              "MW Rental Power",
              "Nova Condesa",
              "Orca Mining",
              "Packaging Machinery",
              "Manufacturers Institute Inc.",
              "Pandora Jewelry",
              "PC Capital",
              "Peco Pallet México",
              "Pitney Bowes",
              "Powermate Corp.",
              "Sagem Securité",
              "Schneider México",
              "Siemens",
              "Stewart Connector Systems",
              "Sun Capital Ventures",
              "Takeda",
              "Tamoin",
              "The Carlyle Group",
              "Tower One Wireless",
              "Toyota",
              "Tresmontes Lucchetti México",
              "Truelock",
              "United Parcel Service (UPS)",
              "WFI",
              "Winco",
              "About the partners",
            ],
          },
        },
      },
    };

  switchLanguage = () => {
    if (this.state.actual === "es") {
      return this.state.language.es;
    } else if (this.state.actual === "en") {
      return this.state.language.en;
    }
  };

  changeLanguage = (a) => {
    console.log("cambiador listo", a);
    let idioma;
    if (this.state.actual === "es") {
      idioma = "en";
    } else if (this.state.actual === "en") {
      idioma = "es";
    }
    return this.setState({
      ...this.state,
      actual: idioma,
    });
  };

  evento = (id) => {
    this.setState({
      language: {
        ...this.state.language,
        es: {
          ...this.state.language.es,
          socioSolicitado: `${id}`,
        },
        en: {
          ...this.state.language.en,
          socioSolicitado: `${id}`,
        },
      },
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout
          nav={this.switchLanguage().nav}
          changeLanguage={this.changeLanguage}
          language={this.switchLanguage()}
        >
          <Switch>
            <Route exact path="/"
              render={() => (
                <Home
                  language={this.switchLanguage()}
                />
              )
              }
            />
            <Route exact path="/Equipo-Legal"
              render={() =>
                <EquipoLegal
                  leftEquipoLegal={fotoEquipoLegal}
                  datosSocios={this.switchLanguage().dataSocios}
                  evento={this.evento}
                  language={this.switchLanguage()}
                />
              }
            />
            <Route exact path="/Equipo-Legal2"
              render={() =>
                <EquipoLegal2
                  rightEquipoLegal2={fotoEquipoLegal2}
                  datosSocios2={this.switchLanguage().dataSocios2}
                  evento={this.evento}
                  language={this.switchLanguage()}
                  elegido={this.switchLanguage().socioSolicitado}
                />
              }
            />
            <Route exact path="/Equipo-Legal/info"
              render={() =>

                <Socios
                  data={this.switchLanguage().dataSocios[this.switchLanguage().socioSolicitado - 1]}
                />
              }
            />
            <Route exact path="/Equipo-Legal2/info"
              render={() =>

                <Socios2
                  data={this.switchLanguage().dataSocios2[this.switchLanguage().socioSolicitado - 1]}
                />
              }
            />
            <Route exact path="/AreasDePractica" render={() =>
              <AreasPractica
                data={this.switchLanguage().AreasPractica}
              />
            }
            />
            <Route exact path="/Clientes" render={() =>
              <Clientes
                data={this.switchLanguage().clientesData}
              />

            }
            />
            <Route exact path="/alianzas" render={() => (
              <Alianzas
                language={this.switchLanguage()}
              />
            )}
            />
            <Route exact path="/reconocimientos" render={() => (
              <Reconocimientos
                language={this.switchLanguage()}
              />
            )}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
