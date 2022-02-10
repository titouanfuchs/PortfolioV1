import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {Projects} from "../projects/projects.entity";

@Entity()
export class Technos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @Column()
    icon:string;

    @Column()
    link:string;

    projects:Projects[];
}