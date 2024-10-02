# Task Manager Application

## Overview

This project is a Task Manager web application that allows users to efficiently manage their tasks by adding, editing, deleting, and organizing tasks as per their requirements. The app provides several features to enhance user experience, such as task filtering, searching, and the ability to view important task statistics.

## Features

- **Add, Edit, Delete Tasks**: Users can create new tasks, modify existing tasks, or remove tasks that are no longer relevant.
- **Search and Filter**: Users can search for specific tasks or filter tasks based on status or other criteria to quickly find what they need.
- **Task Overview Cards**: A dashboard displays key information, such as the total number of tasks, pending tasks, completed tasks, and upcoming tasks.
- **Upcoming Tasks Alerts**: The app lists the top 2 upcoming tasks to keep users notified about what’s next on their agenda.
- **Persistent Data**: All task data is stored in the browser’s local storage, ensuring it remains intact even after refreshing the page.
- **Beautiful Toast Notifications**: With the help of `Toastify`, the app shows elegant toast notifications for user interactions (e.g., task creation, updates, deletions).
  
## Tech Stack

- **ReactJs**: ReactJs library to build re usable components
- **Redux**: The state management is powered by Redux, making the app highly scalable and organized by providing a single source of truth for the app's state.
- **Toastify**: Used to show notifications for user interactions, improving the overall user experience with sleek, customizable toast messages.
- **Local Storage**: Task data is saved in local storage, which ensures persistence across browser sessions without requiring a backend server.

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/task-manager-app.git
   npm install
   npm run dev
