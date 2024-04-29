# Prerequisites

- Mysql and Mysql Workbench or any other related relational database must be already setup. For more information about the supported databses please follow this [link](https://www.prisma.io/docs/orm/overview/databases).
- Git and Node JS must be installed on your computer. Go for the default installation settings.
    - Here are the download links
        - [NODE](https://nodejs.org/en/download/current)
        - [GIT](https://git-scm.com/download/win)

# Setup Guide

1. Cloning Repository
    1. Open your Command Prompt.
    2. Press Windows Key and type cmd then press Enter.
    3. Type the command ` git clone https://github.com/rtjericho1999/employee-record-management.git `
    4. If you are using Visual Studio Code. You can type ` cd employee-record-management ` and then type ` code .` tp open VS code.

2. Installing Dependencies
    1. Open Terminal then type ` npm install `. If in case of an error, type ` npm install --force `.

3. Connecting Database
    1. Create a .env file in the root directory and type ` mysql://USER:PASSWORD@HOST:PORT/DATABASE `. URL must match your database credentials otherswise it will not work as intended.
    2. Open /employee-record-management/prisma/schema.prisma. Change the provider based on the databse that you are using.
    ```
        datasource db {
            provider = "mysql"
            url      = env("DATABASE_URL")
        }
    ```
    3. Find more information about this on the [prisma documentation](https://www.prisma.io/docs/orm/overview/databases).
    4. Type the command ` npx prisma migrate dev ` in your terminal. You should see the database created right after the command is executed.

4. Running the Program
    1. Type the command ` npm run dev ` in your terminal.
    2. Go to this [link](http://localhost:3000/).
