import { Module } from '@nestjs/common';
import { CartShoppingService } from './cart-shopping.service';
import { CartShoppingController } from './cart-shopping.controller';
import { User } from 'src/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartShoppingDetails } from './entities/cart-shopping-details';
import { CartShopping } from './entities/cart-shopping.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,CartShoppingDetails,CartShopping])],
  controllers: [CartShoppingController],
  providers: [CartShoppingService],
})
export class CartShoppingModule {}
