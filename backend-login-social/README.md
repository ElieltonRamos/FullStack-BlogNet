# Welcome to the FullStack Social Login Project Repository

## <p align="center">Repository Backend</p>


<p align="center">
  <img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" alt="logo docker" width="300px">
  <img src="https://www.stickersdevs.com.br/wp-content/uploads/2022/01/postgresql-adesivo-sticker.png" alt="logo postgresql" width="300px">
  <img src="https://logowik.com/content/uploads/images/nodejs.jpg" alt="logo node" width="300px">
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png" alt="logo express" width="300px">
  <img src="https://www.luiztools.com.br/wp-content/uploads/2021/01/sequelize.png" alt="logo sequelize" width="300px">
  <img src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0mrmucemyb2p06hcxa5c.png" width="300px">
</p>

I present the FullStack Login Social project, a project that has a frontend and a backend written in typescript that offers a complete blog system developed in Node.js with and orchestrated with Docker, with the help of the Express framework and ORM Sequelize to interact with the MySQL database. This is documentation specific to the backend, an API that provides users with essential functionality, including account creation, secure login with JWT (JSON Web Token) authentication, creation, editing and deletion of posts.

## 🐳 Docker

  <img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" alt="logo docker" width="150px">

Docker was used in this project to facilitate the configuration and execution of the development environment. With Docker, it is possible to encapsulate the application, its dependencies and the database in isolated containers, ensuring that it can run consistently in different environments.

The docker-compose.yml file defines the configuration of the containers required for the project, including the MySQL database container and the Node.js application container. With a single command, containers can be initialized, allowing the development environment to be configured quickly and easily, in addition to automated testing with jest.

## Technologies Used

[Node JS](https://nodejs.org/en/docs)

[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

[Typescript](https://www.typescriptlang.org/)

[Docker](https://www.docker.com/get-started/)

[PostgreSQL](https://www.postgresql.org/)

[Express JS](https://expressjs.com/pt-br/)

[Jest](https://jestjs.io/pt-BR/docs/getting-started)

## Index

- [Development Environment](#requirements)
- [Project standards](#project-standards)
- [Installation](#installation)
- [Use](#use)
- [Contact](#contact)
- [License](#license)

## Development Environment

To develop and run this application, you need to set up an environment with the following tools:

Docker: We use Docker to package and isolate the application in containers, ensuring consistent deployment and easy dependency management.

- [How to install docker](https://docs.docker.com/engine/install/ubuntu/)

**Docker Compose**: Docker Compose is a tool that simplifies the definition and management of multi-container services in a single file, ideal for orchestrating containers related to the application.

- [How to install Docker Compose](https://docs.docker.com/compose/install/)

### If you do not want to install Docker, you need to install Node JS on your machine

**Node.js**: The application is developed in Node.js, a JavaScript/TypeScript runtime platform, and is required to run the code.

- [How to install Node.js](https://nodejs.org/en/download/package-manager)

Ensure you install and configure these tools in your development environment before starting the project.

## Project standards

  <img src="https://micreiros.com/wp-content/uploads/designpatterns-720x340.png" alt="docker logo" width="150px">

The backend is based on the Model/Service/Controller (MSC) architecture, I chose this architecture because it separates the app differently, separating the responsibilities of your application into three distinct layers, promoting better organization and maintenance of the code:

**Model:** Manages the logic and representation of data, interacting directly with the database or other data sources.

**Service:** Contains the application's business logic. It is responsible for processing data between the Controller and the Model.

**Controller:** Handles HTTP requests, delegating tasks to the Service and Model layers, and returning appropriate responses to the client.

## Choice of language and framework

  <img src="https://www.devmedia.com.br/arquivos/Artigos/42224/image004.png" alt="logo docker" width="150px">

I chose node along with its express framework and the javascript/typescript language because they are easy-to-understand tools with a large community. TypeScript adds a static typing system to JavaScript, detecting errors at compile time and offering an additional layer of security to the code. It also improves code readability and maintainability by providing features like IntelliSense and autocompletion in code editors. Express is a minimalist framework that allows for greater proximity between the language and the node and the ideal javascript execution environment.

## Use of ORM (Object-Relational Mapping)

 <img src="https://miro.medium.com/v2/da:true/resize:fit:1200/0*UkOqM_a_agYwUOoV" alt="logo docker" width="150px">

I chose to use an ORM because it allows the decoupling of database rules, facilitating a possible change in the future, in addition to allowing the abstraction of data modeling, greater security, protection against sql injection.

I used sequelize because it is a javascript ORM, compatible with typescript, very robust, already known by the community and which provides complete database manipulation through javascript/typescript code.

## Using PostgreSQL

  <img src="https://www.postgresqltutorial.com/wp-content/uploads/2012/08/What-is-PostgreSQL.png" alt="docker logo" width=" 150px">

I chose PostgreSQL as the database for this project because it is a powerful, open-source, and reliable relational database management system. It offers a wide range of features, including support for complex queries, data integrity, and transactions. PostgreSQL is highly extensible, allowing you to create custom data types, functions, and extensions. Its support for JSON and JSONB data types makes it ideal for storing and querying JSON data. With its active community and regular updates, PostgreSQL is a popular choice for web applications, data warehousing, and geospatial applications.

## Use of Json Web Token (JWT)

  <img src="https://pradeepl.com/blog/jwt/JWT-Cover.png" alt="docker logo" width="150px">

As it is an application in which the user needs authentication, I opted for JWT, which offers an efficient and secure solution for authentication in web applications and APIs. It simplifies authentication by allowing user verification without the need to consult the database. each request. With its simple and standardized structure, JWT is easily implemented and interoperable across different platforms. Your ability to include custom information in the token offers control and flexibility in managing permissions and authorizations. Additionally, the digital signature ensures the integrity of the token's data, while optional encryption protects the token's contents from unauthorized access.

## Using Bcript JS

  <img src="https://codeforgeek.com/wp-content/uploads/2023/02/Bcrypt-vs-BcryptJS.jpg" alt="docker logo" width="150px">

To avoid major problems in relation to data leaks, I used Bcript JS, a secure and well-known encryption library in the community, which allows hash comparison without the explicit need to decrypt the password. Furthermore, its flexibility allows it to adjust the computational cost of hashing to keep up with technology advancements. By using bcrypt.js, the protection of users' confidential information is ensured, promoting trust and application integrity.

## Using jest

  <img src="https://miro.medium.com/v2/resize:fit:617/0*Kbpj6uYEDOzd0kbH.png" alt="docker logo" width="150px">

Like any good backend, this one has automated tests, I used jest as a testing library, as it is very complete and does not need many dependencies to be used, it simplifies the testing process with a clear and easy-to-use syntax, in addition to offer advanced features. With its parallel execution, Jest is fast and efficient, making it ideal for large test suites. It offers built-in support for creating mocks, function spying, and snapshot testing, making it easier to create isolated tests and detect regressions. Furthermore, Jest integrates perfectly with TypeScript, allowing you to write statically typed tests. Its ability to integrate with transpiling tools like Babel and packaging tools like Webpack makes it a versatile choice for backend projects.

## Installation

Clone this repository:

   ```bash
   git clone git@github.com:ElieltonRamos/project-fullstack-login-social.git
   ```

Navigate to the project directory:

   ```bash
cd project-fullstack-login-social
   ```

Install the dependencies (if you are not using Docker):

   ``` bash
npm install
   ```

If you are not going to use Docker and you need to start the backend manually

   ``` bash
npm run dev
   ```

If you are going to use docker (recommended), run the commands below

Start docker compose:

   ``` bash
docker compose up -d --build
   ```

Start the application:

  The node container is already configured to leave the application online automatically, if you want to see the application logs, run the following command

   ``` bash
docker logs -f backend
   ```

## Tests

The project has tests that verify the operation of each API route. The tests were written with JEST, remembering that Docker Compose must have been run for the application containers to be online for the tests to work.

To run the tests, follow these steps:

Open the terminal at the project root:

Run the command to enter the container:

   ``` bash
docker exec -it backend sh
   ```

Run the command:

   ``` bash
npm test
   ```

Check the test output on your terminal

If you don't have Docker installed, install the project's dependencies and run the test command:

   ``` bash
cd backend-login-social && npm install
   ```

Run the tests:

   ``` bash
npm test
   ```

See the test output in your terminal

## Usage

Explore the essential routes of this API, including authentication, CRUD operations, and search capabilities for effective blog administration.

1. **POST /login**
   - Receives a json in the body of the type:

   { "email": string, "password": string }

   - Returns a JWT token and an http status of 200 if the user is valid.
   - If the user does not exist, the password is incorrect or the user is not registered, an error message will be returned.

2. **POST /register**
   - Receives a json in the body in the format:

   {"name": string, "email": string, "password": string, "image": string}

   - It is possible to send the user's profile image in a base64 format
   - The image field is optional
   - Validates whether the fields are valid and returns an error if any field is missing.
   - Registers a new user in the database, returns an http status 201 and a JWT token.

3. **GET /register/user**
   - To access this route it is necessary to enter a JWT token in the header, in the format

      { "authorization": baerer (tokenJWT) }
   
   - Validates whether the token was sent and returns a message if it was not sent
   - Validates the token and returns a message if the token is invalid
   - If the token is valid, it returns the data of the user who made the request
   - Returns an http 200 status and user data

4. **PATCH register/user**
   - To access this route it is necessary to enter a JWT token in the header, in the format:

      { "authorization": baerer (tokenJWT) }
   
   - Validates the token and returns a message if the token is invalid
   - Validates whether the token was sent and returns a message if it was not sent

   - You must receive a json in the body in the format:

      { "name": string, "email": string, "image": string }

   - If the token is valid, update the user who made the request with the body data
   - The image field is optional
   - The name and email fields cannot be empty
   - Returns an http status of 200 and the user is updated

5. **POST /posts**
   - To access this route it is necessary to enter a JWT token in the header, in the format:

      { "authorization": baerer (tokenJWT) }
   
   - Validates whether the token was sent and returns a message if it was not sent
   - Validates the token and returns a message if the token is invalid
   - Creates a new post in the database.
   - Receives a json in the body in the format:
   - It is possible to send the post image in a base64 format, but it is optional
   - Title and content cannot be empty
   - Validates whether the fields are valid and returns an error if any field is missing

      { "title": string, "content": string, image: string }

   - Returns a 201 http status and the created post.

6. **PATCH /posts/:id**
      - Validates whether the token was sent and returns a message if it was not sent
      - Validates the token and returns a message if the token is invalid
      - To access this route it is necessary to enter a JWT token in the header, in the format:

         { "authorization": baerer (tokenJWT) }

      - Updates a post in the database.
      - the post ID must be provided in the route
      - Receives a json in the body in the format:

         { "title": string, "content": string, image: string }

      - It is possible to send the post image in a base64 format, but it is optional
      - Validates whether the post exists and returns a message if it does not exist
      - Validates whether the post belongs to the user who made the request and returns a message if it does not belong
      - Title and content cannot be empty
      - Validates whether the fields are valid and returns an error if any field is missing
      - Returns an http status of 200 and the post is updated.
   

7. **GET /posts/:id**
      - Validates whether the token was sent and returns a message if it was not sent
      - Validates the token and returns a message if the token is invalid
      - To access this route it is necessary to enter a JWT token in the header, in the format:

         { "authorization": baerer (tokenJWT) }

      - Returns a specific post from the database.
      - the post ID must be provided in the route
      - Validates whether the post exists and returns a message if it does not exist
      - Validates whether the post belongs to the user who made the request and returns status 401 and an unauthorized message if it does not belong
      - Returns an http 200 status and the requested post.

8. **DELETE /posts/:id**
      - Validates whether the token was sent and returns a message if it was not sent
      - Validates the token and returns a message if the token is invalid
      - To access this route it is necessary to enter a JWT token in the header, in the format:

         { "authorization": baerer (tokenJWT) }

      - Delete a specific post from the database.
      - the post ID must be provided in the route
      - Validates whether the post exists and returns a message if it does not exist
      - Validates whether the post belongs to the user who made the request and returns status 401 and an unauthorized message if it does not belong
      - Returns a 204 http status with no content

9. **GET /posts**
      - Validates whether the token was sent and returns a message if it was not sent
      - Validates the token and returns a message if the token is invalid
      - To access this route it is necessary to enter a JWT token in the header, in the format:

         { "authorization": baerer (tokenJWT) }

      - If a query is not specified in the route, it returns all posts in the database.
      - Returns an http 200 status and the requested posts.
      - It is possible to send the 'ASC' or 'DESC' queries to order the posts by creation date.
         
         Example: /posts?order=ASC OR /posts?order=DESC

      - It is possible to send the 'USER' query to return only the posts of the user who made the request

         Example: /posts?user=true

      - It is possible to send two previous queries together to order the posts of the user who made the request

         Example: /posts?user=true&order=ASC OR /posts?user=true&order=DESC

      - Returns status 200 and the requested posts

10. **Error Handling**

      - All routes have error handling.
      - All controllers have a try/catch block to avoid exposing internal server data.
      - If an error occurs, it is expected and a message is returned informing what happened.
      - If an unexpected error occurs, the application returns an http 500 status and an error message.

## Contato

Elielton Ramos

[![E-mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:elieltonramos14@gmail.com)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/elielton-ramos/)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](elielton6554)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/elieltonramos08/)

## License

Open Source

This project is open source and available to the community. Feel free to explore, clone, and contribute to the project.

## Acknowledgements

Thank you for all the hours dedicated, challenges overcome, and lessons learned during the development of this project. Every line of code written was a step towards my growth as a developer and the success of this endeavor.

I would also like to extend my gratitude to all educational resources, documentation, and online communities that provided guidance, inspiration, and support throughout this process.
