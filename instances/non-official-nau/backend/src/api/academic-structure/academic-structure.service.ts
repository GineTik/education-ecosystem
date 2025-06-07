import { ParserService } from "@/shared/parser";
import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { AcademicStructureRepository } from "./academic-structure.repository";
import { GroupFiltersDto } from "./dto/group-filters.dto";

@Injectable()
export class AcademicStructureService {
  constructor(
    private readonly parserService: ParserService,
    private readonly academicStructureRepository: AcademicStructureRepository,
  ) {}

  async getFaculties() {
    return this.academicStructureRepository.getFaculties();
  }

  async getSpecialties() {
    return this.academicStructureRepository.getSpecialties();
  }

  async getGroups(filters: GroupFiltersDto) {
    return this.academicStructureRepository.getGroups(filters);
  }

  async getFacultyById(id: string) {
    return this.academicStructureRepository.getFacultyById(id);
  }

  async getSpecialtyById(id: string) {
    return this.academicStructureRepository.getSpecialtyById(id);
  }

  async getGroupById(id: string) {
    return this.academicStructureRepository.getGroupById(id);
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async saveFacultiesToDb() {
    const pageData = await this.parserService.parseGroupListPage();
    const faculties = pageData.faculties.map((f) => f.name);
    await this.academicStructureRepository.saveFaculties(faculties);
    console.log("faculties updated");
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async saveGroupsToDb() {
    const pageData = await this.parserService.parseGroupListPage();
    const groups = pageData.faculties.flatMap((f) =>
      f.groups.map((group) => ({
        name: group.name,
        faculty: f.name,
        specialty: group.specialtyNumber,
      })),
    );
    await this.academicStructureRepository.saveGroups(groups);
    console.log("groups updated");
  }
}
