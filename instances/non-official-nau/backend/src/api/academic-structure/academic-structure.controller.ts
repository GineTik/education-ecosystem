import { Controller, Get, Param, Query } from "@nestjs/common";
import { AcademicStructureService } from "./academic-structure.service";
import { GroupFiltersDto } from "./dto/group-filters.dto";

@Controller("academic-structure")
export class AcademicStructureController {
  constructor(
    private readonly academicStructureService: AcademicStructureService,
  ) {}

  @Get("health")
  health() {
    return {
      status: "healthy",
    };
  }

  @Get()
  async getProfile() {
    return {
      name: "Київський авіаційний університет",
      abbreviation: "КАУ",
      logoBackgroundColor: "#2f418e",
      logoUrl: "https://nau.edu.ua/site/images/header/logo/KAI_logo.png",
      address: "вул. Сім'яновича, 1, м. Київ, 03056, Україна",
      email: "info@nau.edu.ua",
      website: "https://nau.edu.ua",
    }
  }

  @Get("/about")
  async getAbout() {
    return `
# Привіт

Це приклад сторінки опису університету КАІ. Це неофіційний instance університету, тому і офіційного опису тут немає.

> Поки можеш переглянути наступні вкладки.
    `;
  }

  @Get("faculties")
  async getFaculties() {
    return await this.academicStructureService.getFaculties();
  }

  @Get("faculties/:id")
  async getFacultyById(@Param("id") id: string) {
    return await this.academicStructureService.getFacultyById(id);
  }

  @Get("specialties")
  async getSpecialties() {
    return await this.academicStructureService.getSpecialties();
  }

  @Get("specialties/:id")
  async getSpecialtyById(@Param("id") id: string) {
    return await this.academicStructureService.getSpecialtyById(id);
  }

  @Get("groups")
  async getGroups(@Query() filters: GroupFiltersDto) {
    return await this.academicStructureService.getGroups(filters);
  }

  @Get("groups/:id")
  async getGroupById(@Param("id") id: string) {
    return await this.academicStructureService.getGroupById(id);
  }
}
