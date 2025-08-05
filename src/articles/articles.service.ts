import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { Brand } from 'src/brands/entities/brand.entity';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class ArticlesService {

  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,

    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) { }

  async create(createArticleDto: CreateArticleDto) {

    const brand = await this.brandRepository.findOneBy({ name: createArticleDto.brand })

    if (!brand) {
      return 'Not found the brand !!'
    }

    const categories = await this.categoryRepository.find({
      where: createArticleDto.categories.map(name => ({ name })),
    });

    if (categories.length !== createArticleDto.categories.length) {
        throw new BadRequestException('Some categories not found');
    }

    if(categories.length >= 3){
      throw new BadRequestException('Maximum are three categories in each article');
    }

    return await this.articleRepository.save({
      ...createArticleDto,
      brand: brand,
      categories: categories
    });
  }

  async findAll() {
    return await this.articleRepository.find({relations:['brand','categories']});
  }

  async findOne(id: number) {
    return await this.articleRepository.findBy({id}) ;
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const brand = await this.brandRepository.findOneBy({ name: updateArticleDto.brand })

    if (!brand) {
      return 'Not found the brand !!'
    }

    const categories = await this.categoryRepository.find({
      where: updateArticleDto.categories.map(name => ({ name })),
    });

    if (categories.length !== updateArticleDto.categories.length) {
        throw new BadRequestException('Some categories not found');
    }

    if(categories.length >= 3){
      throw new BadRequestException('Maximum are three categories in each article');
    }

    return await this.articleRepository.update(id,{
      ...updateArticleDto,
      brand: brand,
      categories: categories
    });
  }

  async remove(id: number) {
    return await this.articleRepository.softDelete({id});
  }
}
