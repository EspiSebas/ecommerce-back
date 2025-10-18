import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartShoppingDto } from './dto/create-cart-shopping.dto';
import { UpdateCartShoppingDto } from './dto/update-cart-shopping.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartShopping } from './entities/cart-shopping.entity';
import { Repository } from 'typeorm';
import { ArticlesService } from 'src/articles/articles.service';
import { CartShoppingDetails } from './entities/cart-shopping-details';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class CartShoppingService {

  constructor (
    @InjectRepository(CartShopping)
    private readonly cartShoppingRepository: Repository<CartShopping>,
  
    private readonly articleService: ArticlesService,

    @InjectRepository(CartShoppingDetails)
    private readonly cartShoppingDetailsRepository: Repository<CartShoppingDetails>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  
  ){}

  async create(createCartShoppingDto: CreateCartShoppingDto) {

    const user = await this.userRepository.findOne({
      where: { id: createCartShoppingDto.userId },
    });

    if(!user){
      return 'The user doesnt exists'
    }

    const cart = await this.cartShoppingRepository.findOne({
      where: { user: { id: user.id } },
    });

    if(!cart){
      const cart = this.cartShoppingRepository.create({ user });
      await this.cartShoppingRepository.save(cart);
    }

  
    
    for(const i of createCartShoppingDto.details){
      const article = await this.articleService.findOne(i.articleId)

      if(!article){
        throw new NotFoundException('Article does not found')
      }

      if(article['quantity'] < i.quantity){
        throw new BadRequestException('The stock is not available')
      }

      const details = await this.cartShoppingDetailsRepository.create({
        article:{id:i.articleId},
        quantity: i.quantity,
        cart: cart!
      })

      const save = await this.cartShoppingDetailsRepository.save(details)

  

    }


    return { message: 'Cart created successfully'};


    
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
