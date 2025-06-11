import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/shared/prisma";
import { CreateInstanceDto } from "./dto/create-instance.dto";
import { GetInstanceDto } from "./dto/get-instance.dto";

@Injectable()
export class InstancesService {
    constructor(private readonly prisma: PrismaService) {}

    async create(dto: CreateInstanceDto): Promise<void> {
        await this.prisma.institutionInstance.create({
            data: {
                institutionName: dto.name,
                validMailDomains: dto.validMailDomains,
            },
        });
    }

    async getAll(): Promise<GetInstanceDto[]> {
        const instances = await this.prisma.institutionInstance.findMany();

        return instances.map((instance) => ({
            id: instance.id,
            name: instance.institutionName,
            validMailDomains: instance.validMailDomains,
            createdAt: instance.createdAt,
            updatedAt: instance.updatedAt,
        }));
    }
}
