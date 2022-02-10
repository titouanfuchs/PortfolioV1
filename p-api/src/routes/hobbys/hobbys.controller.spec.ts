import { Test, TestingModule } from '@nestjs/testing';
import { HobbysController } from './hobbys.controller';

describe('HobbysController', () => {
  let controller: HobbysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HobbysController],
    }).compile();

    controller = module.get<HobbysController>(HobbysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
