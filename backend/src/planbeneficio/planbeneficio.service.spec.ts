import { Test, TestingModule } from '@nestjs/testing';
import { PlanBeneficioService } from './planbeneficio.service';

describe('PlanBeneficioService', () => {
  let service: PlanBeneficioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanBeneficioService],
    }).compile();

    service = module.get<PlanBeneficioService>(PlanBeneficioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
