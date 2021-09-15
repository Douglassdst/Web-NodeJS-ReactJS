//criação das tabelas no banco de dados
import {UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()

export class cadastroBd{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    endereço: string;

    @Column()
    dataNascimento: Date;

    @Column()
    ra: string;

    @Column()
    idade: number;

    @Column({
        default: false
    })
    ativo: boolean;
}

//id*, nome*, ra*, data de nascimento*, endereço*, matriculado (true/false)*, idade*