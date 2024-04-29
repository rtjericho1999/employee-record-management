This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

#Prerequisites

**************

- Mysql and Mysql Workbench or any other related relational database must be already setup. For more information about the supported databses please follow this [link](https://www.prisma.io/docs/orm/overview/databases).
- Git and Node JS must be installed on your computer.

# Setup Guide

************

- Cloning Repository
    - Open your Command Prompt.
    - Press Windows Key and type cmd then press Enter.
    - Type the command ` git clone https://github.com/rtjericho1999/employee-record-management.git `
    - If you are using Visual Studio Code. You can type ` cd employee-record-management ` and then type ` code .` tp open VS code.

- Installing Dependencies
    - Open Terminal then type ` npm install `. If in case of an error, type ` npm install --force `.

- Connecting Database
    - Create a .env file in the root directory and type ` mysql://USER:PASSWORD@HOST:PORT/DATABASE `. URL must match your database credentials otherswise it will not work as intended.
    - Open /employee-record-management/prisma/schema.prisma. Change the provider based on the databse that you are using.
    ```
        datasource db {
            provider = "mysql"
            url      = env("DATABASE_URL")
        }
    ```
    - Find more information about this on the [prisma documentation](https://www.prisma.io/docs/orm/overview/databases).
    - Type the command ` npx prisma migrate dev ` in your terminal. You should see the database created right after the command is executed.

- Running the Program
    Type the command ` npm run dev ` in your terminal.