import React from 'react';
import HeroHome from '../components/HeroHome';
import MainHome from '../components/MainHome';


class Home extends React.Component{
    render(){
        return <div>
            <HeroHome 
            heroDescription1="Consultoría"
            heroDescription2="Legal Internacional"
            />
            <MainHome />
        </div>
    }
}

export default Home;