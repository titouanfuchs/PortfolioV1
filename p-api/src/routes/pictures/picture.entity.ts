import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, PrimaryColumn, Unique} from 'typeorm';
import {Technos} from "../competences/technos.entity";
import {Languages} from "../competences/languages.entity";
import {Projects} from "../projects/projects.entity";

@Entity()
export class Picture {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    format: string;

    projects:Projects[];
}