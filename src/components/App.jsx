import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import EquipoLegal from '../pages/EquipoLegal';
import fotoEquipoLegal from '../img/leftEquipoLegal.png'
const App = () =>{
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Equipo-Legal"
                    render={ () => 
                    <EquipoLegal leftEquipoLegal={fotoEquipoLegal} 
                    /> 
                    }
                    />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
