import { PartialType } from '@nestjs/swagger';
import { CreateCartShoppingDto } from './create-cart-shopping.dto';

export class UpdateCartShoppingDto extends PartialType(CreateCartShoppingDto) {}
