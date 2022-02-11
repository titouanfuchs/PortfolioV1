import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
    @ApiProperty()
    name:string;

    @ApiProperty()
    description:string;

    @ApiProperty({default: false, type:Boolean})
    isPublic:boolean;

    @ApiProperty()
    gitLink:string;

    @ApiProperty()
    link:string;

    @ApiProperty({type: [Number]})
    technosIDs:number[];

    @ApiProperty({type: [Number]})
    languagesIDs:number[];
}
