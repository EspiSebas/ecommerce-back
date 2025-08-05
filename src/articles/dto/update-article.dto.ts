import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateArticleDto {
    @IsString()
    @IsOptional()
    name: String;

    @IsOptional()
    @IsString()
    description: String;

    @IsNumber()
    @IsOptional()
    quantity: Number;

    @IsOptional()
    @IsNumber()
    price: Number;

    @IsOptional()
    @IsString()
    brand: String;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    categories: string[];

}
