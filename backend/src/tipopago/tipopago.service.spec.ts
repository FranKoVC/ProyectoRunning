import { Test, TestingModule } from '@nestjs/testing';
import { TipopagoService } from './tipopago.service';

describe('TipopagoService', () => {
  let service: TipopagoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipopagoService],
    }).compile();

    service = module.get<TipopagoService>(TipopagoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
