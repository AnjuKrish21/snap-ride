# Snap-Ride

Snap-Ride is a full-stack application for managing users and rides, built with Spring Boot (Java) for the backend and Angular for the frontend.

## Project Structure

```
snap-ride/
├── backend/
│   └── user-service/
│       ├── src/
│       ├── pom.xml
│       └── ...
└── frontend/
    ├── projects/
    │   ├── admin/
    │   └── public/
    ├── package.json
    └── ...
```

## Backend

- **Tech Stack:** Java 17, Spring Boot, Spring Data JPA, Maven
- **Location:** `backend/user-service/`
- **How to Run:**
  1. Navigate to the backend directory:
     ```sh
     cd backend/user-service
     ```
  2. Build and run the application:
     ```sh
     ./mvnw spring-boot:run
     ```
  3. The API will be available at `http://localhost:8080/api/users`.

## Frontend

- **Tech Stack:** Angular, TypeScript
- **Location:** `frontend/`
- **How to Run:**
  1. Navigate to the frontend directory:
     ```sh
     cd frontend
     ```
  2. Install dependencies:
     ```sh
     npm install
     ```
  3. Start the development server:
     ```sh
     npm start
     ```
  4. The app will be available at `http://localhost:4200`.

## Features

- User management (CRUD)
- Modular frontend projects for admin and public interfaces

## Development

- Backend code is in [`backend/user-service`](backend/user-service)
- Frontend code is in [`frontend`](frontend)

## License

This project is licensed under the MIT License.