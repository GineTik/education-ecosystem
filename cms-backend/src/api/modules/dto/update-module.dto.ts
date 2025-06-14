import { IsBoolean, IsString } from "class-validator";

export class UpdateModuleDto {
    @IsBoolean()
    isEnabled: boolean;

    @IsString()
    apiKey: string;

    @IsString()
    typeId: string;
}
