# Personal Portfolio Documentation

This document provides an overview of the structure and contents of the Personal Portfolio project. The project is divided into three main folders: `admin`, `backend`, and `frontend`.

## Folder Structure

### Admin
The `admin` folder contains all the files and resources related to the administration panel of the portfolio website. This includes:

- **Dashboard**: Overview of the website's performance and statistics.
- **User Management**: Tools for managing user accounts and permissions.
- **Content Management**: Interfaces for updating and managing the content displayed on the portfolio website.

### Backend
The `backend` folder contains the server-side code and logic for the portfolio website. This includes:

- **API**: Endpoints for handling requests from the frontend.
- **Database**: Configuration and models for interacting with the database.
- **Utilities**: Helper functions and middleware used throughout the backend.

### Frontend
The `frontend` folder contains the client-side code and resources for the portfolio website. This includes:

- **Components**: Reusable UI components.
- **Pages**: Different pages of the portfolio website.
- **Styles**: CSS and styling resources.
- **Assets**: Images, fonts, and other static assets.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone <https://github.com/Chethantram/Portfolio.git>
    ```

2. **Navigate to the project directory**:
    ```sh
    cd Personal-Portfolio
    ```

3. **Install dependencies for each part of the project**:
    ```sh
    cd admin
    npm install
    cd ../backend
    npm install
    cd ../frontend
    npm install
    ```

4. **Run the development servers**:
    - Admin:
        ```sh
        cd admin
        npm start
        ```
    - Backend:
        ```sh
        cd backend
        npm start
        ```
    - Frontend:
        ```sh
        cd frontend
        npm start
        ```

## Contributing

If you would like to contribute to the project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear and concise messages.
4. Push your changes to your fork and create a pull request.
