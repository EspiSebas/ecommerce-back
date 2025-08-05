import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {

  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository : Repository<Brand>
  ){}

  async create(createBrandDto: CreateBrandDto) {
    return await this.brandRepository.save(createBrandDto);
  }

  async findAll() {
    return await this.brandRepository.find();
  }

  async findOne(id: number) {
    return await this.brandRepository.findBy({id});
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    return await this.brandRepository.update(id,updateBrandDto);
  }

  async remove(id: number) {
    return await this.brandRepository.softDelete({id});
  }
}
