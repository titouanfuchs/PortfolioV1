import { ApiProperty } from '@nestjs/swagger';

export class CreateTechnoDto {
    @ApiProperty()
    name:string;

    @ApiProperty()
    link?:string;

    @ApiProperty()
    icon:string;
}
