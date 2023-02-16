
import { IsString, IsNotEmpty, IsNumber } from "class-validator";
export class CreateItemDto {

    @IsString()
    @IsNotEmpty()
    itemName: string;
    @IsNumber()
    @IsNotEmpty()
    itemCost: number;

    description?: string;


}
