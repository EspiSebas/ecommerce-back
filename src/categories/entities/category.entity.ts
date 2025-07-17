import { Article } from "src/articles/entities/article.entity";
import { Collection, Column, DeleteDateColumn, Entity, ManyToMany } from "typeorm";


@Entity()
export class Category {

    @Column({ primary: true, generated: true })
    id: number;

    @Column({ unique: true, length: 50 })
    name: String;

    @Column({ length: 90 })
    description: String;

    @ManyToMany(() => Article, article => article.categories)
    articles: Article[]

    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;
}
