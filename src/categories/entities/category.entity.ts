import { Collection, Column, DeleteDateColumn, Entity } from "typeorm";


@Entity()
export class Category {

    @Column({primary: true,generated:true})
    id:number;

    @Column()
    name:string;

    @Column()
    description: string;

}
