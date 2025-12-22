# Inventory Management System - Frontend

The frontend for a fullstack inventory management system for books built with React and Vite. This connects to a separate backend API to manage book inventory data.

*This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum.*

## Features

- View all products in a sortable table
- Search products by name
- Create, edit, and delete products
- Manage product categories
- Responsive design

## Tech Stack

- **Frontend**: React, React Router, Vite
- **Styling**: CSS Modules
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Backend API running (see backend repository)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd inventory/frontend
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.example .env
```

4. Add your backend URL to `.env`
```
VITE_BACKEND_URL=http://localhost:8000
```

5. Start development server
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── route/         # Router configuration
└── styles.module.css
```

## Deployment

The app is configured for deployment on Vercel with SPA routing support via `vercel.json`.