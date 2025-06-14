import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string
    @IsNotEmpty()
    @IsNumber()
    age: number
    }
