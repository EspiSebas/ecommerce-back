import { Article } from "src/articles/entities/article.entity";
import { Column, DeleteDateColumn, Entity, OneToMany } from "typeorm";

@Entity()
export class Brand {
    @Column({ primary: true, generated: true })
    id: number;

    @Column({ unique: true, length: 50 })
    name: String;

    @Column({ length: 120 })
    description: String;


    @OneToMany(() => Article, article => article.brand)
    articles: Article[];

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;
}
