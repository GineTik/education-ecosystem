# Education ecosystem

## Introduction

This project is an **Education Ecosystem** designed to connect students with their educational institutions through a centralized platform.

The main components are:

- **student-frontend**: The user interface for students.
- **central-management-service (CMS)**: A central service that acts as a proxy between the student frontend and institution-specific servers. The CMS can add new functional modules for students that are not related to the educational institution and that educational institutions do not need to implement.
- **Institution Instance**: A separate server deployed by each educational institution, exposing a public API (e.g., `non-official-nau`). Instance can have any architecture, programming language, libraries and others. Important only Public API (default RESTful API).

The CMS interacts with the public APIs of institutional instances to fetch and manage data. This allows institutions to control their own data while providing students with a unified experience.

System administrators can register new institutions. Institution administrators can then configure the connection between their instance's API and the CMS.

## Architecture and structure

![Components diagram](docs/images/structure-diagram.png)

### Central management service

> Architecture: Modular

```
central-management-service/
|- src/
|  |- api/
|  |- shared/
|  |- app.module.ts
|  |- main.ts
|- ... (config files)
```

### Student Frontend

> Architecture: Evolution design

```
student-frontend/
|- src/
|  |- app/
|  |- features/
|  |- shared/
|- public/
|- ... (config files)
```

### Example of Institution Instance (non-official-nau)

> Architecture: Modular

```
instances/non-official-nau/backend/
|- src/
|  |- api/
|  |- shared/
|  |- app.module.ts
|  |- main.ts
|- ... (config files)
```

## Images

### Admin Panel

![Admin Institutions](docs/images/admin-institutions.png)
_Admin panel - Institutions_

![Admin Users](docs/images/admin-users.png)
_Admin panel - Users_

### Institution Configuration

![Institution Modules](docs/images/institution-modules.png)
_Institution - Modules_

![Institution Module Enabled](docs/images/institution-module-enabled.png)
_Institution - Module Enabled_

![Institution Schedule](docs/images/institution-schedule.png)
_Institution - Schedule_
