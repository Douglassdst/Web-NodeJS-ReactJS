import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
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
    created_at: Date;
    updated_at: Date;
}

const Principal: React.FC = () => {
 
    const [infor, setAlunos] = useState<Iinfo[]>([])
    const history = useHistory()
 
    useEffect(() => {
        buscarAlunos()
    }, [])
 
    async function buscarAlunos() {
        const response = await api.get('/aluno')
        console.log(response);
        setAlunos(response.data)
    }
 
    function formatarData(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }
 
    //ok
    function novo(){
        history.push('/aluno_cadastro')
    }
 
    //ok
    function editar(id: number){
        history.push(`/aluno_cadastro/${id}`)
    }
 
    //ok
    function visualizar(id: number){
        history.push(`/aluno/${id}`)
    }
 
    async function attSituacao(id: number){
        await api.patch(`/aluno/${id}`)
        buscarAlunos()
    
    }
 
    //ok
    async function deletar(id: number){
        await api.delete(`/aluno/${id}`)
        buscarAlunos()
    }

 
    return (
        
        <div className="container">
            <br />
            <div className="task-header">
                <h1>Alunos Cadastros</h1>
                <Button variant="dark" size="sm" onClick={novo}>Novo Aluno</Button>
            </div>
            <br />
            <Table striped bordered hover variant="dark" className="text-center">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>RA</th>
                    <th>idade</th>
                    <th>Atualização</th>
                    <th>Data de Nascimento</th>
                    <th>Situação</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        infor.map(ifr => (
                            <tr key={ifr.id}>
                                <td>{ifr.id}</td>
                                <td>{ifr.nome + " " + ifr.sobrenome}</td>
                                <td>{ifr.endereço + " N°" + ifr.numero}</td>
                                <td>{ifr.ra}</td>
                                <td>{ifr.idade }</td>
                                <td>{formatarData(ifr.updated_at)}</td>
                                <td>{formatarData(ifr.nascimento)}</td>
                                <td>{ifr.ativo ? "Cursando" : "Desativado"}</td>
                                
                                <td>
                                    <Button size="sm" variant="primary" onClick={() => editar(ifr.id)}>Editar</Button>{' '}
                                    <Button size="sm" variant="success" onClick={() => attSituacao(ifr.id)}>Atualizar</Button>{' '}
                                    <Button size="sm" variant="warning" onClick={() => visualizar(ifr.id)}>Visualizar</Button>{' '}
                                    <Button size="sm" variant="danger" onClick={() => deletar(ifr.id)}>Remover</Button>{' '}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
 
export default Principal;