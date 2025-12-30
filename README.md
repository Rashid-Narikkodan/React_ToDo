# React Todo App

A modern, responsive todo application built with **React**, **TypeScript**, and **Vite**. and **TailwindCSS**

## Features

- ✅ Create, read, update, and delete todo items
- 🎯 Mark todos as complete/incomplete
- 💾 Persistent storage with local storage
- ⚡ Lightning-fast development with Vite
- 🎨 Clean and intuitive user interface
- 📱 Fully responsive design
- 🔒 Type-safe code with TypeScript

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation build tool
- **TailwindCSS** - Styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd React_ToDo
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

### Development

Run the development server:
```bash
pnpm dev
# or
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
pnpm build
# or
npm run build
```

### Preview

Preview the production build locally:
```bash
pnpm preview
# or
npm run preview
```

## Project Structure

```
src/
├── components/      # React components
├── pages/          # Page components
├── assets/         # Static assets
├── App.tsx         # Main application component
├── main.tsx        # Application entry point
└── index.css       # Global styles
```

## Usage

1. **Add a Todo**: Type your task in the input field and click "Add" or press Enter
2. **Complete a Todo**: Click the checkbox next to a todo to mark it as complete
3. **Delete a Todo**: Click the delete button to remove a todo
4. **Filter Todos**: View all, active, or completed todos

## License

This project is open source and available under the MIT License.

## Author

Created as a learning project to master React and Vite development.
