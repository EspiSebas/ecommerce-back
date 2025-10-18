import { IsNumber } from "class-validator";

export class CreateCartShoppingDetailsDto {
    @IsNumber()
    articleId: number;

    @IsNumber()
    quantity: Number;
}