# Todo App

A modern Todo app built with Next.js, React Query for data fetching and optimistic updates, Tailwind CSS for styling, and support for themes.

## Features

- **Next.js** for server-side rendering and API routes.
- **React Query** for data fetching, caching, and optimistic UI updates.
- **Tailwind CSS** for styling with utility-first classes.
- **Theme Support** with dark and light modes.
- **Optimistic UI** for seamless user experience.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Environment Variables

Create a `.env` file and add your environment variables:
```sh
NEXT_PUBLIC_BASE_API_URL= https://jsonplaceholder.typicode.com
```

### Running the Development Server

Start the development server:
```sh
npm run dev
# or
yarn dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### API Routes

- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Create a new todo
- `DELETE /api/todos/:id` - Delete a todo

### Optimistic UI with React Query

The app uses React Query's `useMutation` for handling CRUD operations with optimistic updates:

### Theming

The app includes dark and light mode support using `next-themes` package.
```sh
npm install next-themes
# or
yarn add next-themes
```
## Deployment

### Build the Application

```sh
npm run build
# or
yarn build
```

### Start the Production Server
```sh
npm start
# or
yarn start
```


