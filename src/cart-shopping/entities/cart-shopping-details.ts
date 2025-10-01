import { Article } from "src/articles/entities/article.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, UpdateDateColumn } from "typeorm";
import { CartShopping } from "./cart-shopping.entity";

@Entity()
export class CartShoppingDetails {
    @Column({ primary: true, generated: true })
    idCartDetails: number;

    
    @ManyToOne(() => CartShopping, cart => cart.details)
    cart: CartShopping;
    

    @ManyToOne(() => Article, article => article.details)
    article: Article;
    
    @Column()
    quantity: Number;

}
