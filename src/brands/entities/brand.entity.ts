import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class Brand {
    @Column({ primary: true, generated: true })
    id: number;

    @Column({ unique: true, length: 50 })
    name: String;

    @Column({ length: 120 })
    description: String;

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;
}
