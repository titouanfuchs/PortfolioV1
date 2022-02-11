import { ApiProperty } from '@nestjs/swagger';

export class PatchProjectDto {
    @ApiProperty()
    name:string;

    @ApiProperty()
    description:string;

    @ApiProperty()
    gitLink:string;

    @ApiProperty()
    link:string;

    @ApiProperty({type: [Number]})
    technosIDs:number[];

    @ApiProperty({type: [Number]})
    languagesIDs:number[];
}
