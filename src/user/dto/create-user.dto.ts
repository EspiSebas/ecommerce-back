import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";
import { Roles } from "src/common/roles";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsNumber()
    documentIdent: number;

    @IsNumber()
    numberCellphone: number;

    @IsString()
    email: string;

    @IsString()
    @IsOptional()
    role:Roles;
    
    

}
