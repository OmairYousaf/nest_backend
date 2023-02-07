Installs Globally.
    - Node.
    - Docker.
    - npx.
    - npm.
    - yarn.
Creating Project.
    - npx @nestjs/cli new <name>
Starting Project.
    - npm run start:dev
Creating PostgreSQL Instance
    - touch docker-compose.yml      (It will generate a file for docker configurations.)
    - place the below code in above file.
  
  # docker-compose.yml
version: '3.8'
services:

  postgres:
    image: postgres:13.5
    restart: always
    environment:
      - POSTGRES_USER=myuser
      - POSTGRES_PASSWORD=mypassword
    volumes:
      - postgres:/var/lib/postgresql/data
    ports:
      - '5432:5432'

volumes:
  postgres:



    - docker-compose up

SetUp Prisma:

    - npm install -D prisma
    - npx prisma init    (this will also create .env file.)
     
     replace the username , password.

    - Add Model to Prisma Schema.

Migration To Database:

    - npx prisma migrate dev --name "init"

Create a Prisma Service:
    - npx nest generate module prisma
    - npx nest generate service prisma

Set up Swagger:
    - npm install --save @nestjs/swagger swagger-ui-express

    initialize Swagger in main.ts file.

Implement CRUD operations for Article Model
    - npx nest generate resource

    - Next 
    Follow Reference Link ==========>>>   https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0 

If u want watch while running the server  (Restart by editing and saving the file.) 
    - Install nodemon globally

    - add below lines to launch.json file residing in .vscode
        "runtimeExecutable": "nodemon",
        "restart": true
    