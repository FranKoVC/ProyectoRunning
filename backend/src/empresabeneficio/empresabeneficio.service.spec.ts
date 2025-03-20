import { Test, TestingModule } from '@nestjs/testing';
import { EmpresaBeneficioService } from './empresabeneficio.service';

describe('EmpresaBeneficioService', () => {
  let service: EmpresaBeneficioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpresaBeneficioService],
    }).compile();

    service = module.get<EmpresaBeneficioService>(EmpresaBeneficioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
