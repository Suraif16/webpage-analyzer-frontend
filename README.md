# Web Page Analyzer Frontend

A Next.js application that provides a user interface for analyzing web pages.

Check out demo video of application:  
[Demo URL](https://youtu.be/WPlctqzm0u8)

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

## Project Structure
```
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
```

## Libraries used & their purpose
- zod - Form validation
- axios - HTTP client
- toast - Notifications
- tailwindcss - Styling

## Challenges faced and how I overcome them
- Responsive design - Used Tailwind's responsive classes
- Repeated code for UI elements - Created reusable components with props
- Previous results remaining displayed, when current prompt gives an error - Used proper state clearing and error handling

## Additional Information

For more details, visit the documentation:  
[Documentation URL](https://docs.google.com/document/d/18IrcFGb_ur-Axp3A0NRtFfond7CdH8vCVmjz4spNSyg/edit?tab=t.0#heading=h.vwi3xxoqbucr)

## License

This project is licensed under the MIT License.
