import { Module } from '@nestjs/common';
import { HobbysService } from './hobbys.service';
import { HobbysController } from './hobbys.controller';

@Module({
  providers: [HobbysService],
  controllers: [HobbysController]
})
export class HobbysModule {}
