import React from 'react';
import {Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import './index.css';

 
const Home: React.FC = () => {
    
    const historico = useHistory()
    function pagina() {
        historico.push('/aluno')
    }

    return (

        <div className="container">
            <div className="conteudo">
                <h1 className="Titulo">Sistema Escolar</h1>
                <p className="texto">area designada para consulta e cadastro de alunos  </p>
            
                <Button size="lg" variant="dark" onClick={pagina}>Clique para Continuar</Button>
            </div>
        </div>


    )
    
}
 
export default Home;