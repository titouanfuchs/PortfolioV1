import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, PrimaryColumn, Unique} from 'typeorm';
import {Technos} from "../competences/technos.entity";
import {Languages} from "../competences/languages.entity";
import {Picture} from "../pictures/picture.entity";

@Entity()
export class Projects {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({unique: true})
    name: string;

    @Column()
    description: string;

    @JoinTable({name: 'join_Project-Languages'})
    @ManyToMany(() => Languages, language => language.projects)
    languages: Languages[];

    @JoinTable({name: 'join_Project-Technos'})
    @ManyToMany(() => Technos, techno => techno.projects)
    technos: Technos[];

    @Column()
    gitLink: string;

    @Column()
    link:string;

    @JoinTable({name: 'join_Project-Pictures'})
    @OneToMany(() => Picture, picture => picture.project)
    pictures:Picture[];

    @Column({default: false})
    isPublic:boolean;
}