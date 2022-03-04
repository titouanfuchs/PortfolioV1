import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageDto {
    @ApiProperty()
    name:string;

    @ApiProperty()
    link?:string;

    @ApiProperty()
    icon:string;
}
