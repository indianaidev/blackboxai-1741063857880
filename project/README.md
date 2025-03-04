# Blog Platform with Admin Features

A modern blog platform built with React, Clerk Authentication, Neon Database, and Drizzle ORM.

## Quick Start

1. Set up environment variables:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_NEON_DATABASE_URL=your_neon_database_url
```

2. Install dependencies:
```bash
npm install
```

3. Initialize database:
```bash
npm run db:init
```

4. Start development server:
```bash
npm run dev
```

## Admin Setup

1. Sign in with Clerk
2. Go to Clerk Dashboard
3. Add to user's public metadata:
```json
{
  "role": "admin"
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:init` - Initialize database
- `npm run db:generate` - Generate migrations
- `npm run db:push` - Push schema changes
- `npm run db:studio` - Open Drizzle Studio

## Technologies

- React + TypeScript
- Clerk Authentication
- Neon Database
- Drizzle ORM
- TanStack Query
- Tailwind CSS
- React Router
