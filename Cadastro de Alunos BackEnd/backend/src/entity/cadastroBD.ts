//criação das tabelas no banco de dados
import {UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()

export class cadastroBd{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    sobrenome: string;

    @Column()
    endereço: string;

    @Column()
    numero:string;

    @Column()
    ra: string;

    @Column() 
    idade: string;

    @Column({
        default: false
    })
    ativo: boolean;

    @Column()
    nascimento: Date;
    
    @CreateDateColumn()
    create_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;
}
