# Posts App

A simple React application that demonstrates basic CRUD (Create, Read, Update, Delete) functionality for posts using the JSONPlaceholder API.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview

The **Posts App** is a lightweight application built with React. It fetches posts from a REST API (JSONPlaceholder) and allows you to add new posts, edit existing ones, and delete posts. The app is structured with a main component that renders a list of posts and a form component to handle the creation and editing of posts.

- **Main component:** [App.js](./App.js)
- **Posts listing and management:** [Posts.js](./components/Posts.js)
- **Post form:** [PostForm.js](./components/PostForm.js)
- **API Service:** [postService.js](./services/postService.js)

## Features

- **View Posts:** Display a list of posts retrieved from the API.
- **Add Post:** Create a new post with a title and content.
- **Edit Post:** Update an existing post.
- **Delete Post:** Remove a post from the list.

## Installation

To run the **Posts App** locally, follow these steps:

1. **Clone the repository:**

```
 git clone https://github.com/jeffgrahamcodes/react-api-demo.git
 cd react-api-demo
```

2. **Install dependencies:**

```
 npm install
```

3. **Start the development server:**

```
 npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Usage

- **View Posts:** When you open the app, it automatically fetches and displays a list of posts.
- **Add Post:** Use the form at the top of the page to add a new post. Enter a title and content, then click **Add Post**.
- **Edit Post:** Click the **Edit** button next to any post to load its data into the form, make changes, and submit.
- **Delete Post:** Click the **Delete** button to remove a post from the list.

## File Structure

    ├── src
    │   ├── components
    │   │   ├── Posts.js         # Lists posts and handles edit/delete actions
    │   │   └── PostForm.js      # Form component for adding/editing posts
    │   ├── services
    │   │   └── postService.js   # API calls using axios
    │   ├── App.js               # Root component that renders the Posts component
    │   └── App.css              # Styling for the application

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Axios:** HTTP client for making API requests.
- **JSONPlaceholder:** Free REST API used for testing and prototyping.

## API Endpoints

The application uses the following endpoints provided by JSONPlaceholder:

- **GET /posts:** Retrieve a list of posts.
- **POST /posts:** Create a new post.
- **PUT /posts/{id}:** Update an existing post.
- **DELETE /posts/{id}:** Delete a post.

## Contributing

Contributions are welcome! If you want to improve the app or add new features, follow these steps:

1. Fork the repository.
2. Create a new branch (e.g., `feature/new-feature`).
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Open a Pull Request detailing your changes.

## License

This project is licensed under the MIT License.
