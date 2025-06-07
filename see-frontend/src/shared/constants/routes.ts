class Routes {
  CABINET_HOME = "/cabinet";
  ABOUT_PROJECT = "/about-project";
  STUDENT_GROUP = "/cabinet/group";
  STUDENT_SCHEDULE = "/cabinet/group/schedule";
  STUDENT_SETTINGS = "/cabinet/student/settings";
  STUDENT_PROFILE = "/cabinet/student/profile";
  UNIVERSITY_COMMUNITIES(universityId: number) {
    return `/cabinet/university/${universityId}/communities`;
  }
  UNIVERSITY_PAGES(universityId: number) {
    return `/cabinet/university/${universityId}/pages`;
  }
  STUDENT_UNIVERSITY(universityId: number) {
    return `/cabinet/university/${universityId}`;
  }
}

export const ROUTES = new Routes();
