# Mood: AI-Powered Journaling App

**Mood** is an AI-enhanced journaling web app that helps users track their emotions and gain deeper insights into their mental well-being. With features like advanced sentiment analysis and question-driven searches, Mood transforms journaling into a more interactive and insightful experience.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Introduction
Mood isn’t just a typical journaling app—it's a personal tool for emotional reflection. By leveraging AI and natural language processing, Mood analyzes your entries to provide insights into your emotional patterns. Whether you're tracking daily emotions or exploring long-term sentiment trends, Mood helps you better understand your mood journey over time.

## Features
- **Create Journal Entries**: Easily add new entries to document your thoughts, emotions, and experiences.
  
- **Sentiment Analysis**: Mood uses AI powered by the OpenAI API to analyze the emotional tone of your entries, helping you track your emotional evolution.
  
- **Sentiment History Visualization**: Track how your moods change over time with a visual chart that displays your sentiment history.

- **Question-Based Search**: Curious about recurring themes or specific emotions in your journal? Ask a question, and Mood will perform a search using in-memory vector similarity to find relevant entries.

- **Autosave and Sync**: Your entries are saved and synced with the database automatically, so you never lose your progress.

## Tech Stack
Mood is built using modern technologies to ensure performance and scalability:

- **Next.js 13 + TypeScript**: A robust framework for building server-side rendered web applications.
- **Prisma ORM + NeonDB**: For managing database schema and handling migrations. Neon is a serverless open-source alternative to AWS Aurora Postgres.
- **OpenAI API**: AI-driven sentiment analysis to process journal entries.
- **TailwindCSS**: A utility-first CSS framework for streamlined styling.
- **Vitest**: Unit testing to ensure reliable app performance.
- **Clerk Auth**: Provides user authentication with webhook support.
- **Langchain for In-Memory Vector DB**: Enables fast, AI-powered similarity search for querying journal content.

## Installation
To set up the Mood app on your local machine:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/mood.git
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Set up your environment variables (including OpenAI API key and NeonDB configuration).
4. Run the Prisma migrations:
    ```bash
    npx prisma migrate dev
    ```
5. Start the development server:
    ```bash
    npm run dev
    ```

## Usage
1. Sign up or log in to your Mood account.
2. Start journaling by adding new entries.
3. Mood will automatically analyze your entries and track your emotional trends.
4. Use the question-based search to explore insights about your journal.
5. Check out the sentiment history chart to visualize your mood over time.

## Contributing
Contributions are welcome to help make Mood better! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes.
4. Push to your fork and submit a pull request.

## Contact
If you have questions, feedback, or suggestions, feel free to reach out via [LinkedIn](https://www.linkedin.com/in/michael-y-han/).


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
