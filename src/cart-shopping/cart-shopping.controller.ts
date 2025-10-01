import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartShoppingService } from './cart-shopping.service';
import { CreateCartShoppingDto } from './dto/create-cart-shopping.dto';
import { UpdateCartShoppingDto } from './dto/update-cart-shopping.dto';

@Controller('cart-shopping')
export class CartShoppingController {
  constructor(private readonly cartShoppingService: CartShoppingService) {}

  @Post()
  create(@Body() createCartShoppingDto: CreateCartShoppingDto) {
    return this.cartShoppingService.create(createCartShoppingDto);
  }

  @Get()
  findAll() {
    return this.cartShoppingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartShoppingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartShoppingDto: UpdateCartShoppingDto) {
    return this.cartShoppingService.update(+id, updateCartShoppingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartShoppingService.remove(+id);
  }
}
