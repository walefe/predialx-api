# predialx-api
  - This is a API for prediax an application for create customers, clients and orders :smile:

## Getting started

1. Clone this repo using `https://github.com/walefe/predialx-api`
2. Move to the appropriate directory: `cd predialx`.<br />
3. Run `yarn` or `npm i` to install dependencies.<br />
4. Create a container docker like `docker run --name predialx -e POSTGRES_DB=predialx -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:alpine`
5. Config `.env` file with url for prisma like `DATABASE_URL="postgresql://postgres:docker@localhost:5432/predialx?schema=public"`
6. Run `npx prisma migration dev` for applies migrations in database
7. Run `npx prisma db seed` to create seeds in database
8. Run `yarn dev` or `npm run dev` to see the example app at `http://localhost:3000`.
