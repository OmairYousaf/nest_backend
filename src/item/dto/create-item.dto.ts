
import { IsString, IsNotEmpty, IsNumber } from "class-validator";
export class CreateItemDto {

    @IsString()
    @IsNotEmpty()
    itemName: string;
    @IsNumber()
    @IsNotEmpty()
    itemCost: number;
    @IsString()
    @IsNotEmpty()
    description?: string;


}
