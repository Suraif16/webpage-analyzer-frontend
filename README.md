# Web Page Analyzer Frontend

A Next.js application that provides a user interface for analyzing web pages.

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

## Setup

1. Install dependencies:

```
npm install
```

2. Running the Application

```
npx next dev
```

Access at: http://localhost:3000

Production build:

```
npm run build
```

```
npm start
```

Project Structure
webpage-analyzer-frontend/
├── src/
│ ├── app/ # Next.js App Router
│ ├── components/ # Reusable React components
│ ├── styles/ # Styling utilities
│ ├── types/ # TypeScript definitions
│ └── lib/ # Utility functions
├── public/ # Static files
├── .env # Environment variables
└── package.json # Project metadata and dependencies

Environment Variables

Define necessary environment variables in a .env file:

```
NEXT_PUBLIC_API_URL=<your-server-url>
```

## License

This project is licensed under the MIT License.
