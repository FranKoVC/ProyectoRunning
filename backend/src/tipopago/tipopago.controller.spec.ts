import { Test, TestingModule } from '@nestjs/testing';
import { TipopagoController } from './tipopago.controller';

describe('TipopagoController', () => {
  let controller: TipopagoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipopagoController],
    }).compile();

    controller = module.get<TipopagoController>(TipopagoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
