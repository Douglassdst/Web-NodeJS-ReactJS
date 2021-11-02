import React from 'react';
import {Switch, Route} from 'react-router-dom'
 
import Home from './pages/Home';
import Alunos from './pages/alunos';
import Atualizacao from './pages/alunos/Atualizacao';
import Informacoes from './pages/alunos/Informacoes';
import Cadastro from './pages/alunos/Cadastro'
 
const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/aluno" exact component={Alunos} />
            <Route path="/aluno_cadastro" exact component={Cadastro} />
            <Route path="/aluno_cadastro/:id" exact component={Atualizacao} />
            <Route path="/aluno/:id" exact component={Informacoes} />
        </Switch>
    );
}
 
export default Routes;

