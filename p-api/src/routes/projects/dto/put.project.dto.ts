import { ApiProperty } from '@nestjs/swagger';

export class PutProjectDto {
    @ApiProperty()
    isPublic:boolean;
}
