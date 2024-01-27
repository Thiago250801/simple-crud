import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: "User should not be empty"})
    name : string;
    @IsNotEmpty({message: "User function should not be empty"})
    function: string
}