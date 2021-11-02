import React, { useState, useEffect } from 'react';
import { Button, ListGroup} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom'
import './index.css';
import api from '../../../services/api';
import moment from 'moment';
 
interface Iinfo{
    id: number;
    nome: string;
    endereço: string;
    ra:string;
    idade:string;
    ativo: boolean;
    nascimento: Date;
    sobrenome: string;
    numero: string;
    create_at: Date;
    updated_at: Date;
}
 
const Informacoes: React.FC = () => {
 
    const historico = useHistory()
    const { id } = useParams<{ id: string }>()
    const [alunos, setAlunos] = useState<Iinfo>()
 
    function back(){
        historico.goBack()
    }
 
    async function proucurar(){
        const response = await api.get<Iinfo>(`/aluno/${id}`)
        console.log(response)
        setAlunos(response.data)
    }

    function editar(){
        historico.push(`/aluno_cadastro/${id}`)
    }
 
    useEffect(() => {
        proucurar()
    },[id] )

   
    return (
        <div className="container">
            <br />
            <div className="task-header">
                <h1>Informações</h1>
                <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
           <br />
           <div className="teste">
                <ListGroup as="ol" >
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Nome:</div>
                                {alunos?.nome + " " + alunos?.sobrenome}
                            </div>

                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Data de Nascimento:</div>
                                {moment(alunos?.nascimento).format('DD/MM/YYYY')}
                            </div>

                            <div className="ms-2 me-auto">
                                <div className="fw-bold">RA:</div>
                                {alunos?.ra}
                            </div>
                    </ListGroup.Item>

                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Endereço:</div>
                                {alunos?.endereço}
                            </div>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Numero:</div>
                                {alunos?.numero}
                            </div>
                    </ListGroup.Item>
                    
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                            <div className="fw-bold">Situação:</div>
                                {alunos?.ativo ? "Cursando" : "Desativado"}
                            </div>
                    </ListGroup.Item>    

                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Data de Cadastro:</div>
                                {moment(alunos?.create_at).format('DD/MM/YYYY')}
                            </div>

                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Data de Atualização:</div>
                                {moment(alunos?.updated_at).format('DD/MM/YYYY')}
                            </div>
                    </ListGroup.Item>

                </ListGroup>
                <br />
                <Button variant="dark" size="sm" onClick={() => editar()}>Atualizar Informações</Button>
           </div>
 
        </div>       

    );
}
 
export default Informacoes;
 
