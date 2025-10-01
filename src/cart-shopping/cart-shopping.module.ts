import { Module } from '@nestjs/common';
import { CartShoppingService } from './cart-shopping.service';
import { CartShoppingController } from './cart-shopping.controller';

@Module({
  controllers: [CartShoppingController],
  providers: [CartShoppingService],
})
export class CartShoppingModule {}
