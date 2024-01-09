# JSON-HTML Renderer

## Description

**JSON-HTML Renderer** is a backend-driven web application using Node.js, React, and TypeScript, specialized in transforming JSON data into HTML content. Leveraging React's server-side rendering, it dynamically generates HTML on the backend based on JSON structures created with the Creatopy app.

## Features

- Dynamic rendering of various element types (text, buttons, images, svg, shape) from JSON.
- React with Server-Side Rendering (SSR) on a Node.js backend.
- TypeScript integration for improved code quality and type safety.

## Technologies Used

- React 18.2.0
- Node.js with Express 4.18.2
- TypeScript 5.3.3
- Vite 5.0.10 for building the client and server
- Jest for testing

## Architecture

The application is structured into two main parts: the backend (Node.js/Express) and the frontend (React).

- **Backend**: The Node.js server is responsible for fetching JSON data from the Creatopy API and rendering it into HTML using React's SSR capabilities. It serves the HTML content to the client.

- **Frontend**: The React application, although primarily rendered on the server, also handles any dynamic client-side interactions. It receives the pre-rendered HTML from the server and hydrates it to become a fully interactive application.

- **Data Flow**: When a request is made to the server, it fetches the necessary JSON data, processes it, and uses React to generate the corresponding HTML, which is then sent to the client.

- **Components**: The application consists of several React components designed to render different types of content (text, buttons, images, etc.) based on the JSON structure.

## Getting Started

### Prerequisites

- Node.js
- npm (or yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:RosenUrkov/json-html-renderer.git
   ```
1. Install the dependencies
   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

- **npm run dev**: Runs the app in development mode using Node.js.
- **npm run build**: Builds the app for production to the dist folder.
- **npm run preview**: Serves the production build of the app.
- **npm run lint**: Runs ESLint to check for code quality issues.
- **npm run test**: Runs Jest to execute tests.

### Testing

Tests are implemented using Jest and React Testing Library. Run tests with:

```bash
npm run test
```

### Usage

To start the application in development mode:

```bash
npm run dev
```

### Building for Production

To create a production build, use:

```bash
npm run build
```
