import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, UpdateDateColumn } from "typeorm";
import { CartShoppingDetails } from "./cart-shopping-details";

@Entity()
export class CartShopping {
    @Column({ primary: true, generated: true })
    idCart: number;

    @OneToOne(() => User, user => user.cartShopping, { eager: true, nullable: false })
    @JoinColumn()
    user: User;
    
    @OneToMany(() => CartShoppingDetails, (detalle) => detalle.cart, { cascade: true })
    details: CartShoppingDetails[]

    @UpdateDateColumn()
    lastModifyDate: Date;

}
