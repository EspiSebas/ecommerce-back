import { IsString } from "class-validator";

export class CreateBrandDto {
    @IsString()
    name: String;

    @IsString()
    description: String;

}
