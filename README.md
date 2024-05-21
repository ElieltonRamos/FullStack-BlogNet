# Welcome to the FullStack Login Social Project Repository

## <p align="center">Repository FullStack</p>


<p align="center">
  <img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" alt="logo docker" width="300px">
  <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/800px-MySQL.svg.png" alt="logo mysql" width="300px">
    <img src="https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png" alt="logo express" width="300px">
  <img src="https://www.luiztools.com.br/wp-content/uploads/2021/01/sequelize.png" alt="logo sequelize" width="300px">
  <img src="https://pt.vitejs.dev/og-image-announcing-vite4-3.png" alt="logo vite" width="300px">
  <img src="https://logowik.com/content/uploads/images/nodejs.jpg" alt="logo node" width="300px">
  <img src="https://cdn.thexcodes.com/imgs/reactJS.png" alt="logo react" width="300px">
  <img src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg" alt="logo tailwind" width="300px">
  <img src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0mrmucemyb2p06hcxa5c.png" width="300px">
</p>

I present the FullStack Login Social project, a project that has a frontend and a backend written in typescript that offers a complete blog system developed in Node.js and orchestrated with Docker. The frontend was built with React JS, Vite and Tailwind CSS . The backend was built with Express, Sequelize, node, typescript.

## 🐳 Docker 

  <img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" alt="logo docker" width="150px">

Docker was used in this project to facilitate the configuration and execution of the development environment. With Docker, it is possible to encapsulate the application, its dependencies and the database in isolated containers, ensuring that it can run consistently in different environments.

The docker-compose.yml file defines the configuration of containers required for the project. With a single command, containers can be initialized, allowing the development environment to be set up quickly and easily.

## Technologies Used

[Node JS](https://nodejs.org/en/docs)

[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

[Typescript](https://www.typescriptlang.org/)

[Docker](https://www.docker.com/get-started/)

[Tailwind](https://tailwindcss.com/)

[React JS](https://react.dev/)

[Vite](https://vitejs.dev/guide/)

[MySQL](https://www.mysql.com/)

[Express JS](https://expressjs.com/pt-br/)

[Jest](https://jestjs.io/pt-BR/docs/getting-started)

## index

- [Ambiente de Desenvolvimento](#requisitos)
- [Padroes do projeto](#padroes-do-projeto)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contato](#contato)
- [Licença](#licença)

## Development Environment

To develop and run this application, it is necessary to configure an environment with the following tools:

**Docker**: We use Docker to package and isolate the application in containers, ensuring consistent deployment and easy dependency management.

- [Como instalar o docker](https://docs.docker.com/engine/install/ubuntu/)

**Docker Compose**: Docker Compose is a tool that simplifies the definition and management of multi-container services in a single file, ideal for orchestrating application-related containers.

- [Como instalar o Docker-Compose](https://docs.docker.com/compose/install/)

### If you do not want to install Docker, you need to install Node JS on your machine

**Node.js**: The application is developed in Node.js, a JavaScript/Typescript runtime platform, and is required to execute the code.

- [Como instalar o Node.js](https://nodejs.org/en/download/package-manager)

Be sure to install and configure these tools in your development environment before starting the project.

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
cd frontend-login-social && npm install
   ```

It is also necessary to install the backend dependencies

      ``` bash
cd backend-login-social && npm install
   ```

If you are not going to use Docker and you need to start the frontend and backend manually

   ``` bash
npm run dev
   ```

Go to the frontend-login-social folder and run the command:

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

  Backend container:

     ``` bash
docker logs -f backend
   ```
Container do frontend:

   ``` bash
docker logs -f frontend
   ```

## Usage

The front end application will be available at http://localhost:3000, where you can access the user interface and interact with the backend RESTful API.

The backend application will be available at http://localhost:3001, where you can access the RESTful API and interact with the database.

In the frontend-login-social and backend-login-social folders, you will find the appropriate README.md with detailed instructions on how to use and configure each part of the application. in addition to explanations about the routes, application functionalities, test execution and project patterns.

## Contact

Elielton Ramos

[![e-mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:elieltonramos14@gmail.com)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/elielton-ramos/)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](elielton6554)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/elieltonramos08/)

## License

Open Source

This project is open source and available to the community. Feel free to explore, clone, and contribute to the project.

## Acknowledgements

Thank you for all the hours dedicated, challenges overcome, and lessons learned during the development of this project. Every line of code written was a step towards my growth as a developer and the success of this endeavor.

I would also like to extend my gratitude to all educational resources, documentation, and online communities that provided guidance, inspiration, and support throughout this process.

