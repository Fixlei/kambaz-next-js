# Kambaz

Kambaz is a learning management system modeled after Canvas, with intended users including students, instructors, and site administrators. This educational project is developed as part of CS5610 Web Development.

The project follows six chapters of the course textbook, providing hands-on practice in building a web application step by step. Chapter 1 establishes the page structure. Chapter 2 adds styling and responsive layouts. Chapter 3 introduces JavaScript data and logic so that page content can change based on data rather than remain hardcoded.

## Overview

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Current Features

- **Labs**: Lab 1 (HTML), Lab 2 (CSS, React Icons, Tailwind), Lab 3 (JavaScript, in progress)
- **Account**: Sign in, Sign up, and Profile screens
- **Dashboard**: course cards in a responsive grid
- **Courses**: Home (Modules + Course Status), Modules, Assignments, Assignment Editor, People
- **Navigation**: a fixed Kambaz sidebar and a course sidebar that highlight the current page
- **Responsive layout**: Course Status hides below 1024px; both sidebars hide below 768px

## Tech Stack

- Next.js 16 (App Router) + React + TypeScript
- TailWind CSS and kambaz.css
- React Icons
- JavaScript

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

| Branch | Chapter                             | Site                                                          |
| ------ | ----------------------------------- | ------------------------------------------------------------- |
| `a1`   | Chapter 1: HTML                     |
| `a2`   | Chapter 2: CSS and Tailwind         | https://kambaz-next-js-git-a2-fixed-lei-s-projects.vercel.app |
| `a3`   | Chapter 3: JavaScript (in progress) | https://kambaz-next-js-git-a3-fixed-lei-s-projects.vercel.app |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Author

Minghua Lei & Claude Code @ Northeastern University Boston
