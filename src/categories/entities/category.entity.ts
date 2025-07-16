import { Collection, Column, DeleteDateColumn, Entity } from "typeorm";


@Entity()
export class Category {

    @Column({primary: true,generated:true})
    id:number;

    @Column({unique:true,length:50})
    name:String;

    @Column({length:90})
    description: String;

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;
}
