import { Column, Entity } from "typeorm";

@Entity()
export class CartShopping {
    @Column({ primary: true, generated: true })
    id: number;
    
    @Column({ unique: true, length: 50 })
    name: String;

    @Column()
    quantity: Number;


}
