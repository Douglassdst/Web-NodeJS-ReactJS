import { getRepository } from "typeorm";
import { cadastroBd } from '../entity/cadastroBD';
import { Request, Response } from "express";

//consulta geral
export const consultaCadastros = async(request: Request, response: Response) => {
    const consultas = await getRepository(cadastroBd).find()
    return response.json(consultas);
};

//consulta de usuario unico
export const consultaCadastro = async(request: Request, response: Response) => {
    const{id} = request.params;
    const consultaID = await getRepository(cadastroBd).findOne(id);
    return response.json(consultaID);
};

//cadastro 
export const criarCadastro = async(request: Request, response: Response) =>{
    const adicionar = await getRepository(cadastroBd).save(request.body);
    return response.json(adicionar);
};

//atuzação 
export const atualizarCadastro = async(request: Request, response: Response) => {
    const {id} = request.params;
    const atualizar = await getRepository(cadastroBd).update(id, request.body);

    if (atualizar.affected == 1) {
        const cadastroATT = await getRepository(cadastroBd).findOne(id);
        return response.json(cadastroATT)
    } else {
        return response.status(404).json({message : "Aluno não encontrado! "})
    };
};

//deletar
export const deletarCadastro = async(request: Request, response: Response) => {
    const {id} = request.params;
    const deletar = await getRepository(cadastroBd).delete(id);

    if (deletar.affected == 1) {
        return response.status(200).json({message: "Cadastro excluido com Sucesso"})
    } else {
        return response.status(404).json({message: "Cadastro não encontrado"})
    };
};

//alteração para verdadeiro o prametro de matricula ativa
export const ativoCadastro = async(request: Request, response: Response) => {
    const {id} = request.params;
    const situacao = await getRepository(cadastroBd).update(id, {ativo: true})

    if (situacao.affected == 1) {
        const alunoAtivo = await getRepository(cadastroBd).findOne(id);
        return response.json(alunoAtivo);
    } else {
        return response.status(404).json({message : "Aluno não encontrado"})
    };
};


