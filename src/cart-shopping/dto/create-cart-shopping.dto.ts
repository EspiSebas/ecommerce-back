import { IsArray, IsNumber, IsString } from "class-validator";
import { CreateCartShoppingDetailsDto } from "./create-cart-shopping-details.dto";

export class CreateCartShoppingDto {

    @IsNumber()
    userId: number;

    @IsArray()
    details:CreateCartShoppingDetailsDto[];
}
