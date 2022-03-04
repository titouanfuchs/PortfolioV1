import { ApiProperty } from '@nestjs/swagger';

export class PatchLanguageDto {
    @ApiProperty()
    name?:string;

    @ApiProperty()
    link?:string;

    @ApiProperty()
    icon:string;
}
