import { Brand } from "src/brands/entities/brand.entity";
import { CartShoppingDetails } from "src/cart-shopping/entities/cart-shopping-details";
import { Category } from "src/categories/entities/category.entity";
import { Column, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Article {
    @Column({ primary: true, generated: true })
    id: number;

    @Column({ unique: true, length: 50 })
    name: String;

    @Column({ length: 120 })
    description: String;

    @Column()
    quantity: Number;

    @Column()
    price: Number;

    @ManyToOne(() => Brand, brand => brand.articles, { eager: true, nullable: false })
    brand: Brand;

    @ManyToMany(() => Category, category => category.articles, { cascade: true })
    @JoinTable() 
    categories: Category[];

    @OneToMany(() => CartShoppingDetails, (detalle) => detalle.article)
    details: CartShoppingDetails[];

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;
}

