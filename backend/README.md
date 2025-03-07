# Backend Documentation

## Endpoints

### 1. Add Project
- **URL:** `/api/project/add-project`
- **Method:** `POST`
- **Description:** Adds a new project to the database.
- **Request Body:**
    ```json
    {
        "name": "Project Name",
        "description": "Project Description",
        "image": "Project image",
        "Link": "Github Link"
    }
    ```
- **Response:**
    - `201 Created` on success
    - `400 Bad Request` on validation error

### 2. List Projects
- **URL:** `/api/project/list`
- **Method:** `GET`
- **Description:** Retrieves a list of all projects.
- **Response:**
    ```json
    [
        {
            "id": "1",
            "name": "Project Name",
            "description": "Project Description",
            "image": "Project Image",
            "Link": "Github Link"
        }
        
    ]
    ```

### 3. Get Project by ID
- **URL:** `/api/project/:id`
- **Method:** `GET`
- **Description:** Retrieves a project by its ID.
- **Response:**
    ```json
    {
        "id": "1",
        "name": "Project Name",
        "description": "Project Description",
        "image": "Project Image",
        "Link": "Github Link"
    }
    ```
    - `404 Not Found` if the project does not exist

### 4. Remove Project
- **URL:** `/api/project/remove`
- **Method:** `DELETE`
- **Description:** Removes a project from the database.
- **Request Body:**
    ```json
    {
        "id": "1"
    }
    ```
- **Response:**
    - `200 OK` on success
    - `404 Not Found` if the project does not exist
