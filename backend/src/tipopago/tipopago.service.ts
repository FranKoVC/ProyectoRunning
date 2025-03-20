import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoPago } from '../entities/TipoPago';

@Injectable()
export class TipopagoService {
    constructor(
        @InjectRepository(TipoPago)
        private readonly tipoPagoRepository: Repository<TipoPago>,
    ) {}

    async create(tipoPago: TipoPago): Promise<TipoPago> {
        const newTipoPago = this.tipoPagoRepository.create(tipoPago);
        return await this.tipoPagoRepository.save(newTipoPago);
    }
    
    async findAll(): Promise<TipoPago[]> {
        return await this.tipoPagoRepository.find();
    }
}
