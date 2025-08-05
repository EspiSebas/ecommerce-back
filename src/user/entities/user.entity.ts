import { Roles } from "src/common/roles";
import { Column, Entity } from "typeorm";

@Entity()
export class User {
    @Column({ primary: true, generated: true })
    id: number;

    @Column({ unique: true, length: 50 })
    name: String;

    @Column({ length: 120 })
    lastName: String ;

    @Column({unique:true})
    documentIdent: number;

    @Column({length:13})
    numberCellphone: number;

    @Column({unique:true,nullable:false})
    email: string;

    @Column()
    password: string;


   @Column({ type: 'enum', default: Roles.CLIENT , enum: Roles})
    role: string;
    

}
