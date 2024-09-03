# 🚀 TaskTrek

TaskTrek is your ultimate task management tool with simple elegant UI and minimalist design! 📝 It helps you organize, track, and manage your tasks with ease. Add, update, delete, and filter your tasks all in one place!

## 🌐 GitHub Repository

[TaskTrek GitHub Repository](https://github.com/sohailbritt/TaskTrek)

## 📚 Table of Contents

-   [✨ Features](#-features)
-   [🛠 Technologies Used](#-technologies-used)
-   [⚙️ Installation](#%EF%B8%8F-installation)
-   [🎯 Usage](#-usage)
-   [🔗 API Endpoints](#-api-endpoints)
-   [📦 Components](#-components)
-   [🌐 Context Providers](#-context-providers)
-   [📜 License](#-license)

## ✨ Features

-   🗂 **Task Management**: Effortlessly add, edit, delete, and view tasks.
-   🔍 **Task Filtering**: Easily filter tasks by their completion status (Completed, Not Yet Completed).
-   🔎 **Search Functionality**: Quickly search tasks by name.
-   ⚡ **Dynamic UI Updates**: Real-time task updates using React hooks.
-   🌍 **Global State Management**: Manage global state across components with Context API.

## 🛠 Technologies Used

-   **Frontend**: React ⚛️, CSS 🎨
-   **Backend**: Node.js 🟢, Express.js 🚀
-   **Database**: MongoDB 🍃
-   **Deployment**: Vercel 🌍 (for backend), Vite ⚡ (for frontend)

## ⚙️ Installation

### Prerequisites

-   Node.js 🟢
-   npm or yarn 📦
-   MongoDB 🍃

### Clone the Repository

bash

Copy code

`git clone https://github.com/sohailbritt/TaskTrek.git
cd TaskTrek`

### Backend Setup

1.  Navigate to the `backend` directory.

    bash

    Copy code

    `cd backend`

2.  Install the required dependencies.

    bash

    Copy code

    `npm install`

3.  Set up environment variables in a `.env` file.

    env

    Copy code

    `PORT=4000
    MONGODB=your_mongodb_uri`

4.  Run the backend server.

    bash

    Copy code

    `npm start`


### Frontend Setup

1.  Navigate to the `frontend` directory.

    bash

    Copy code

    `cd frontend`

2.  Install the required dependencies.

    bash

    Copy code

    `npm install`

3.  Run the frontend server.

    bash

    Copy code

    `npm start`


### Accessing the Application

-   The frontend will run on `http://localhost:5173` 🖥️.
-   The backend will run on `http://localhost:4000` 🌐.

## 🎯 Usage

### ➕ Adding a Task

1.  Navigate to the **Dashboard** tab.
2.  Enter the task details in the input field.
3.  Click on the **Add** button to add the task to the list.

### 🗑️ Deleting a Task

1.  Go to the **TaskList** or **Completed TaskList** section.
2.  Click on the delete icon 🗑️ next to the task you want to delete.

### 🔍 Searching for a Task

1.  Use the search bar in the **TaskList** section.
2.  Type in the name of the task you want to find.

### 🔄 Switching Between Tabs

1.  Click on the **Dashboard**, **TaskList**, or **Completed TaskList** tabs to switch between different task views.

## 🔗 API Endpoints

### GET `/api/tasks`

-   **Description**: Fetch all tasks.
-   **Response**: JSON array of tasks.

### POST `/api/task`

-   **Description**: Add a new task.
-   **Body**: `{ task: String, isCompleted: Boolean }`
-   **Response**: The newly created task.

### PUT `/api/task/:id`

-   **Description**: Update a task by ID.
-   **Body**: `{ task: String, isCompleted: Boolean }`
-   **Response**: The updated task.

### DELETE `/api/task/:id`

-   **Description**: Delete a task by ID.
-   **Response**: Success message or error.

## 📦 Components

### `ListingTab.jsx`

-   Manages the display of tasks, including searching, filtering, and switching between different views (Dashboard, TaskList, Completed TaskList).

### `InputField.jsx`

-   Handles the input of new tasks.

### `Modal.jsx`

-   Displays a modal for updating or deleting a task.

### `Button.jsx`

-   Renders buttons with different functionalities like adding tasks.

## 🌐 Context Providers

### `taskTrekContext`

-   Provides task-related state and actions across the application.

### `userContext`

-   Manages user-related state such as the current tab view.

## 📜 License

TaskTrek is licensed under the MIT License. See the [LICENSE](https://github.com/sohailbritt/TaskTrek/blob/main/LICENSE) file for more details.