import { IsNumber, IsString } from "class-validator";

export class CreateProfileDto {

    @IsNumber()
    userId: number;


    @IsString()
    bio: string;
}
