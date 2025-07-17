import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Brand } from 'src/brands/entities/brand.entity';
import { Category } from 'src/categories/entities/category.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Article,Brand,Category])],
  controllers: [ArticlesController],
  providers: [ArticlesService],
  exports:[TypeOrmModule]
})
export class ArticlesModule {}
