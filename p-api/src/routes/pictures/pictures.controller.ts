import {Controller, Delete, Get, Post} from '@nestjs/common';
import {pictureIdParam} from "../api.params";
import {ApiParam, ApiTags} from "@nestjs/swagger";

@ApiTags('Pictures')
@Controller('pictures')
export class PicturesController {

    @Get(`:${pictureIdParam.name}`)
    @ApiParam(pictureIdParam)
    getPicture(){

    }

    @Post()
    postPicture(){

    }

    @Delete(`:${pictureIdParam.name}`)
    @ApiParam(pictureIdParam)
    deletePicture(){

    }
}
