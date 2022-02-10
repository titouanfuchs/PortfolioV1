import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Competence} from "./routes/competences/competence.entity"

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'portfolio-BDD',
    port:+process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [Competence],
    autoLoadEntities: true,
    synchronize: process.env.TARGET === "dev"
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  private constructor() {
  }
}
