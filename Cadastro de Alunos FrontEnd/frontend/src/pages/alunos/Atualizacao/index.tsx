import React, { useState, ChangeEvent, useEffect } from 'react';
import { Button, Col, Form, Row} from 'react-bootstrap';
import api from '../../../services/api';
import './index.css';
import { useHistory, useParams } from 'react-router-dom';
 
interface Iinfo{
    nome: string;
    endereço: string;
    ra: string;
    idade: string;
    nascimento: string;
    numero: string;
    sobrenome: string;
}   

const Atualizacao: React.FC = () => {
    
    const history = useHistory()
    const { id } = useParams<{ id: string }>()
 
    const [model, setModel] = useState<Iinfo>({
        nome: '',
        endereço: '',
        ra:'',
        nascimento: '',
        idade:'', 
        numero: '',
        sobrenome:''

    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }
 
    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
            const response = await api.put(`/atualizaraluno/${id}`, model)
        back()
    }
 
     
    useEffect(() => {
        console.log(id)
        if (id !== undefined) {
            procurar(id)
        }
    }, [id])
 
 
    async function procurar(id: string){
        const response = await api.get(`aluno/${id}`)
        console.log(response)
        setModel({
            nome: response.data.nome,
            endereço: response.data.endereço,
            ra: response.data.ra,
            nascimento: response.data.nascimento,
            idade: response.data.idade,
            sobrenome: response.data.sobrenome,
            numero: response.data.numero
        })
    }

    function back(){
        history.goBack()
    }

    return (
        
        <div className="container">
            <br />
            <div className="task-header">
                <h1>Atualização Cadastral</h1>
                <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br />

            <form onSubmit={onSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control                             
                            type="text"
                            name="nome"
                            value={model.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/> 
                    </Form.Group>

                    <Form.Group as={Col} md="8">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control
                            name="sobrenome"
                            value={model.sobrenome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>
                </Row>
                
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Idade</Form.Label>
                        <Form.Control
                            name="idade"
                            value={model.idade}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>RA</Form.Label>
                        <Form.Control
                            name="ra"
                            value={model.ra}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control
                            type="date"
                            name="nascimento"
                            value={model.nascimento}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>            

                </Row>
                <br/>

                <Row className="mb-3">
                    <Form.Group as={Col} md="9"> 
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control
                                name="endereço"
                                value={model.endereço}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>

                    </Form.Group>

                    <Form.Group as={Col} md="3">
                            <Form.Label>Numero</Form.Label>
                            <Form.Control
                                name="numero"
                                value={model.numero}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                </Row>

                <br/>

                <Button variant="dark" type="submit">
                    Atualizar
                </Button>
            </form>
            
            

        </div>
    );

} 
export default Atualizacao;
