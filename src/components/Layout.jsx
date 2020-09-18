import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) =>{
    return (
        <React.Fragment>
            <Navbar 
            link1={props.nav.link1}
            link2={props.nav.link2}
            link3={props.nav.link3}
            link4={props.nav.link4}
            link5={props.nav.link5}
            link6={props.nav.link6}
            idioma={props.nav.actual}
            changeLanguage={props.changeLanguage}
            />
            {props.children}
            <Footer 
            link1={props.nav.link1}
            link2={props.nav.link2}
            link3={props.nav.link3}
            link4={props.nav.link4}
            link5={props.nav.link5}
            link6={props.nav.link6}
            language={props.language}
            />
        </React.Fragment>
    );
}

export default Layout;