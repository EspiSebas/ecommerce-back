import { IsOptional, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
    @IsString()
    @ApiProperty({example:'cellphone',description:'name of category'})
    name:String;
    
    @IsString()
    @ApiProperty({example:'cellphone with new technology',description:'description of the category'})
    description:String;
    
}
