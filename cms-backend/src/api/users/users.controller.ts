import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Auth, SignedUser } from "@/shared/auth/decorators";
import { User } from "@/shared/prisma";
import { ApiResponse } from "@nestjs/swagger";
import { ErrorResponse } from "@/shared/swagger";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get("profile")
    @Auth()
    @ApiResponse({
        status: 200,
        description: "User profile",
    })
    @ApiResponse({
        status: 401,
        description: "Unauthorized",
        type: ErrorResponse,
    })
    async getUser(@SignedUser() user: User): Promise<User | null> {
        return await this.usersService.getById(user.id);
    }
}
