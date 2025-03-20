import { Test, TestingModule } from '@nestjs/testing';
import { PlanBeneficioController } from './planbeneficio.controller';

describe('PlanBeneficioController', () => {
  let controller: PlanBeneficioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanBeneficioController],
    }).compile();

    controller = module.get<PlanBeneficioController>(PlanBeneficioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
