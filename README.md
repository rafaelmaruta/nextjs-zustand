# nextjs-zustand

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Zustand](https://img.shields.io/badge/Zustand-brown?style=for-the-badge&logo=npm&logoColor=white)](https://github.com/pmndrs/zustand)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

## Overview

A modern front-end scaffold built with Next.js and Zustand for efficient state management. This project provides a clean, organized structure for building client-side applications with best practices baked in.

### Tech Stack

- **Runtime Environment**: Node.js v23.6.x
- **Package Manager**: pnpm >= 8.5.1
- **Framework**: Next.js with App Router
- **UI Library**: React
- **State Management**: Zustand
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: React Testing Library

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nextjs-zustand.git

# Navigate to project directory
cd nextjs-zustand

# Install dependencies
pnpm install
```

## Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
├── app/                      # Main Next.js application directory (App Router)
│   ├── assets/               # Static application resources
│   │   ├── icons/            # SVG icons used throughout the project
│   │   └── images/           # Images and logos
│   ├── components/           # Reusable React components
│   ├── constants/            # Application constants and fixed values
│   ├── stores/               # Global state management with Zustand
│   │   ├── products/         # Store for product management
│   │   └── wishlist/         # Store for wishlist management
│   ├── utils/                # Utility functions
│   ├── wishlist/             # Route for wishlist page
│   │   └── page.tsx          # Wishlist page
│   ├── favicon.ico           # Application icon
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx            # Root application layout
│   └── page.tsx              # Home page
├── __tests__/                # Test files organized by feature/component
```

## Architecture Details

### Component Structure

Components follow a modular pattern with their own folder:

```
Button/
├── Button.tsx       # Component implementation
├── Button.test.tsx  # Component tests
├── index.ts         # Re-export for clean imports
└── types.ts         # TypeScript interfaces/types
```

This structure facilitates clean imports (`import { Button } from '@/components/Button'`) and maintains the single responsibility principle.

### State Management

Zustand provides lightweight, hooks-based state management. Example store implementation:

```typescript
// stores/products/store.ts
import { create } from 'zustand';

interface ProductState {
  products: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProducts: () => Product[];
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  filteredProducts: () => {
    const { products, searchQuery } = get();
    return searchQuery
      ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      : products;
  }
}));
```

### Styling Approach

The project combines:

- **Tailwind CSS** for rapid UI development and consistent design
- **CSS Variables** for theming and global design tokens:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --text-color: #1f2937;
}
```

### Testing Strategy

Tests are organized alongside the code they test or in the `__tests__` directory for page-level tests. Run tests with:

```bash
npm test
```

## Best Practices

- **Component Composition**: Building complex UIs from simple components
- **Custom Hooks**: Extracting reusable logic into hooks
- **Lazy Loading**: Using Next.js dynamic imports for code splitting
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Semantic HTML and ARIA attributes when needed

## Deployment

Deploy your Next.js application on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

```bash
npm run build
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
