import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import {Technos} from "../competences/technos.entity";
import {Languages} from "../competences/languages.entity";

@Entity()
export class Projects {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @JoinTable({name: 'join_Project-Languages'})
    @ManyToMany(() => Languages, language => language.projects)
    languages: Languages[];

    @JoinTable({name: 'join_Project-Technos'})
    @ManyToMany(() => Technos, techno => techno.projects)
    technos: Technos[];//
}