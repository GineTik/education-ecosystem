import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Auth, SignedUser } from "@/shared/auth/decorators";
import { ApiBody, ApiResponse } from "@nestjs/swagger";
import { ErrorResponse } from "@/shared/swagger";
import { ProfileDto } from "./dto/profile.dto";
import { UserWithPermissions } from "@/shared/auth/dto";
import { PERMISSIONS } from "@/shared/auth";
import { CreateUserDto } from "./dto/create-user.dto";
import { plainToInstance } from "class-transformer";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get("profile")
    @Auth()
    @ApiResponse({
        status: 200,
        description: "User profile",
        type: ProfileDto,
    })
    @ApiResponse({
        status: 401,
        description: "Unauthorized",
        type: ErrorResponse,
    })
    async getUser(
        @SignedUser() user: UserWithPermissions,
    ): Promise<ProfileDto | null> {
        return await this.usersService.getById(user.id);
    }

    @Get()
    @Auth(PERMISSIONS.USERS_READ)
    @ApiResponse({
        status: 200,
        type: [ProfileDto],
    })
    async getAll(): Promise<ProfileDto[]> {
        return await this.usersService.getAll();
    }

    @Post()
    @Auth(PERMISSIONS.USERS_MANAGE)
    @ApiBody({
        type: CreateUserDto,
    })
    @ApiResponse({
        status: 201,
    })
    @ApiResponse({
        status: 400,
        type: ErrorResponse,
    })
    async create(@Body() createUserDto: CreateUserDto): Promise<void> {
        await this.usersService.create(
            plainToInstance(CreateUserDto, createUserDto),
        );
    }
}
