import { IsOptional, IsString } from "class-validator";
export class CreateCategoryDto {
    @IsString()
    name:String;
    
    @IsString()
    description:String;
    
}
