# Job Management API with Unsplash Integration
This project allows users to create jobs that fetch images from Unsplash. If the image is successfully fetched, the job is marked as "resolved"; otherwise, the job is stored as "pending".

## Features
- Create jobs that attempt to fetch an image from Unsplash.
- Jobs are either resolved with an image URL or stored as pending if an image cannot be fetched.
- JSON file used as a data store for jobs.

## Requirements
- Node.js v14 or higher
- npm (Node Package Manager)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Create Environment File
Create a `.env` file in the root directory of the project based on the format provided in `env.sample`.

### 3. Install Dependencies
```bash
npm install
```

### 4. Running the Project
```bash
npm run dev
```

## API Endpoints

### POST `/job`
- **Description**: Create a new job that attempts to fetch a random image from Unsplash in the food category.
- **Response**:
  - If successful, returns the job ID.

### GET `/job`
- **Description**: Fetch a list of all jobs with their statuses.
- **Response**:
  ```json
  [
    { "id": "1692819383457", "status": "resolved", "result": "https://unsplash.com/image-url" },
    { "id": "1692819432395", "status": "pending" }
  ]
  ```

### GET `/job/:id`
- **Description**: Fetch a job by its ID with its status.
- **Response**:
  ```json
  { "id": "1692819383457", "status": "resolved", "result": "https://unsplash.com/image-url" }
  ```
