import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Article } from 'src/articles/entities/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category,Article])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
