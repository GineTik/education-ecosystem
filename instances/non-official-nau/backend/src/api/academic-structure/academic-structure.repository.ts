import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/shared/prisma";
import { SaveGroupDto } from "./dto/group.dto";
import { GroupFiltersDto } from "./dto/group-filters.dto";

@Injectable()
export class AcademicStructureRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getFaculties() {
    return this.prisma.faculty.findMany({
      include: {
        specialties: {
          include: {
            groups: true,
          },
        },
      },
    });
  }

  async getFacultyById(id: string) {
    return this.prisma.faculty.findUnique({
      where: { id },
      include: {
        specialties: {
          include: {
            groups: true,
          },
        },
      },
    });
  }

  async getSpecialties() {
    return this.prisma.specialty.findMany();
  }

  async getSpecialtyById(id: string) {
    return this.prisma.specialty.findUnique({
      where: { id },
      include: {
        groups: true,
        faculty: true,
      },
    });
  }

  async getGroups(filters: GroupFiltersDto) {
    return this.prisma.group.findMany({
      where: {
        specialtyId: filters.specialtyId,
      },
      include: {
        specialty: {
          include: {
            faculty: true,
          },
        },
      },
    });
  }

  async getGroupById(id: string) {
    return this.prisma.group.findUnique({
      where: { id },
      include: {
        specialty: {
          include: {
            faculty: true,
          },
        },
      },
    });
  }
  async saveFaculties(faculties: string[]) {
    await this.prisma.$transaction(
      async (tx) => {
        await Promise.all(
          faculties.map((f) =>
            tx.faculty.upsert({
              where: { name: f },
              update: {},
              create: { name: f },
            }),
          ),
        );
      },
      {
        timeout: 30000,
      },
    );
  }

  async saveGroups(groups: SaveGroupDto[]) {
    await this.prisma.$transaction(
      async (tx) => {
        await Promise.all(
          groups.map(async (g) => {
            const faculty = await tx.faculty.upsert({
              where: { name: g.faculty },
              update: {},
              create: { name: g.faculty },
            });
            const specialty = await tx.specialty.upsert({
              where: { code: g.specialty },
              update: {},
              create: {
                code: g.specialty,
                name: "Specialty " + g.specialty,
                faculty: { connect: { id: faculty.id } },
              },
            });
            await tx.group.upsert({
              where: { name: g.name },
              update: {},
              create: {
                name: g.name,
                specialty: { connect: { id: specialty.id } },
              },
            });
          }),
        );
      },
      {
        timeout: 30000,
      },
    );
  }
}
