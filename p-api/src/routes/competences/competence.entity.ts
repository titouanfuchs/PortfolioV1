import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum competenceType{
    techno,
    language
}

@Entity()
export class Competence {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    link: string;

    @Column()
    type: competenceType
}