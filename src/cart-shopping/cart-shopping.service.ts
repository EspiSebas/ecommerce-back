import { Injectable } from '@nestjs/common';
import { CreateCartShoppingDto } from './dto/create-cart-shopping.dto';
import { UpdateCartShoppingDto } from './dto/update-cart-shopping.dto';

@Injectable()
export class CartShoppingService {
  create(createCartShoppingDto: CreateCartShoppingDto) {
    return 'This action adds a new cartShopping';
  }

  findAll() {
    return `This action returns all cartShopping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cartShopping`;
  }

  update(id: number, updateCartShoppingDto: UpdateCartShoppingDto) {
    return `This action updates a #${id} cartShopping`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartShopping`;
  }
}
