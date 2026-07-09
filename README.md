# React Resource Viewer

A simple React application that demonstrates dynamic data fetching from an external API using React Hooks.

The application allows users to switch between different resources (`Users`, `Posts`, and `Comments`) and fetch data from the JSONPlaceholder API. It also includes loading states, error handling, and conditional rendering.

## Features

- Dynamic resource selection
- Data fetching with the Fetch API
- State management with `useState`
- Side effects with `useEffect`
- Loading state handling
- Error handling with user-friendly messages
- HTTP response validation using `response.ok`
- Dynamic rendering of API data
- Conditional UI rendering

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- Fetch API
- JSONPlaceholder API

## How It Works

1. User selects a resource:
   - Users
   - Posts
   - Comments

2. The selected resource updates the `resourceType` state.

3. `useEffect` detects the state change and triggers a new API request.

4. The fetched data is stored in state and rendered on the page.

5. Loading and error states provide feedback during API requests.

## Concepts Practiced

This project was built as part of my React learning journey and helped me practice:

- React Components
- JSX
- Event Handling
- React Hooks (`useState`, `useEffect`)
- Dependency Arrays
- Asynchronous JavaScript
- API Consumption
- Error Handling
- Conditional Rendering
- List Rendering with `map()`

## API

Data is fetched from:

https://jsonplaceholder.typicode.com/

Resources used:

- `/users`
- `/posts`
- `/comments`

## Future Improvements

- Better UI styling
- Search functionality
- Pagination
- Data caching
- Custom Hooks for data fetching
- React Router integration

## Author

Churchill Majani

Aspiring Full-Stack Developer & AI Engineer
