import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {Projects} from "../projects/projects.entity";

@Entity()
export class Languages {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    icon:string;

    @Column()
    link:string;

    projects: Projects[];
}