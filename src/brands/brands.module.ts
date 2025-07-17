import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Article } from 'src/articles/entities/article.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Brand,Article])],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
