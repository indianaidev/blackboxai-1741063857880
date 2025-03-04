# Blog Platform with Admin Features

A modern blog platform built with React, Clerk Authentication, Neon Database, and Drizzle ORM.

## Prerequisites

1. Create a [Clerk](https://dashboard.clerk.dev/) account
   - Get your publishable key from the Clerk Dashboard
   - Add it to `.env` as `VITE_CLERK_PUBLISHABLE_KEY`

2. Create a [Neon](https://console.neon.tech/) database
   - Create a new project and get the connection string
   - Add it to `.env` as `VITE_NEON_DATABASE_URL`
   - Format: `postgres://user:password@host/database`

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables in `.env`:
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your-clerk-publishable-key
VITE_NEON_DATABASE_URL=postgres://your-neon-connection-string
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
