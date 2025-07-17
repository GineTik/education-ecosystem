import { Controller, Post, Body, Get } from "@nestjs/common";
import { InstancesService } from "./instances.service";
import { CreateInstanceDto } from "./dto/create-instance.dto";
import { Auth } from "@/shared/auth/decorators";
import { PERMISSIONS } from "@/shared/auth";
import { ApiBody, ApiResponse } from "@nestjs/swagger";
import { ForbiddenResponse, ErrorResponse } from "@/shared/swagger";
import { GetInstanceDto } from "./dto/get-instance.dto";
import { plainToInstance } from "class-transformer";

@Controller("instances")
export class InstancesController {
    constructor(private readonly instancesService: InstancesService) {}

    @Post()
    @Auth(PERMISSIONS.INSTANCE_MANAGE)
    @ApiBody({ type: CreateInstanceDto })
    @ApiResponse({
        status: 201,
        description: "Instance created successfully",
    })
    @ApiResponse({
        status: 403,
        description: "Forbidden",
        type: ForbiddenResponse,
    })
    @ApiResponse({
        status: 401,
        description: "Unauthorized",
        type: ErrorResponse,
    })
    @ApiResponse({
        status: 400,
        description: "Instance already exists",
        type: ErrorResponse,
    })
    async create(@Body() dto: CreateInstanceDto) {
        await this.instancesService.create(
            plainToInstance(CreateInstanceDto, dto),
        );
    }

    @Get()
    @Auth(PERMISSIONS.INSTANCE_READ)
    @ApiResponse({
        status: 200,
        description: "Instances fetched successfully",
        type: [GetInstanceDto],
    })
    async getAll() {
        return this.instancesService.getAll();
    }
}
