# Prerequisites

- Mysql and Mysql Workbench or any other related relational database must be already setup. For more information about the supported databses please follow this [link](https://www.prisma.io/docs/orm/overview/databases).
- Git and Node JS must be installed on your computer.

# Setup Guide

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