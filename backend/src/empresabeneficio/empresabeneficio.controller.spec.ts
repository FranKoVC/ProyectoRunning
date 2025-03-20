import { Test, TestingModule } from '@nestjs/testing';
import { EmpresaBeneficioController } from './empresabeneficio.controller';

describe('EmpresaBeneficioController', () => {
  let controller: EmpresaBeneficioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpresaBeneficioController],
    }).compile();

    controller = module.get<EmpresaBeneficioController>(EmpresaBeneficioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
