import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Projects} from "./routes/projects/projects.entity"
import {ProjectsModule} from "./routes/projects/projects.module";
import {Languages} from "./routes/competences/languages.entity";
import {Technos} from "./routes/competences/technos.entity";
import {PicturesModule} from "./routes/pictures/pictures.module";
import {Picture} from "./routes/pictures/picture.entity";
import {CompetencesModule} from "./routes/competences/competences.module";

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'portfolio-BDD',
    port:+process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [Projects, Languages, Technos, Picture],
    autoLoadEntities: true,
    synchronize: /*process.env.TARGET === "dev"*/ false
  }),
      ProjectsModule, PicturesModule, CompetencesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  private constructor() {
  }
}
