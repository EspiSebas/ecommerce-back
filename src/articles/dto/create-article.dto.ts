import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateArticleDto {
    @IsString()
    name: String;

    @IsString()
    description: String;

    @IsNumber()
    quantity: Number;


    @IsNumber()
    price: Number;

    @IsString()
    brand: String;

    @IsArray()
    @IsString({ each: true })
    categories: string[];

}
