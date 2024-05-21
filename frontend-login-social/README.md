# Welcome to the FullStack Social Login Project Repository

## <p align="center">Repository Frontend</p>


<p align="center">
  <img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" alt="logo docker" width="300px">
  <img src="https://pt.vitejs.dev/og-image-announcing-vite4-3.png" alt="logo vite" width="300px">
  <img src="https://logowik.com/content/uploads/images/nodejs.jpg" alt="logo node" width="300px">
  <img src="https://cdn.thexcodes.com/imgs/reactJS.png" alt="logo react" width="300px">
  <img src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg" alt="logo tailwind" width="300px">
  <img src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0mrmucemyb2p06hcxa5c.png" width="300px">
</p>

Introducing the FullStack Social Login project, a frontend and backend project written in TypeScript that offers a complete blog system developed in Node.js and orchestrated with Docker. This is the project's frontend repository, developed with Vite, React, Tailwind CSS, and TypeScript. The frontend provides an intuitive and responsive user interface to interact with the backend's RESTful API.

## 🐳 Docker 

  <img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" alt="logo docker" width="150px">

Docker was used in this project to simplify the setup and execution of the development environment. With Docker, it's possible to encapsulate the application, its dependencies, and the database in isolated containers, ensuring it runs consistently across different environments.

The docker-compose.yml file defines the configuration of the containers needed for the project. With a single command, the containers can be initialized, allowing the development environment to be set up quickly and easily.

## Technologies Used

[Node JS](https://nodejs.org/en/docs)

[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

[Typescript](https://www.typescriptlang.org/)

[Docker](https://www.docker.com/get-started/)

[Tailwind](https://tailwindcss.com/)

[React JS](https://react.dev/)

[Vite](https://vitejs.dev/guide/)

## index

- [Ambiente de Desenvolvimento](#requisitos)
- [Padroes do projeto](#padroes-do-projeto)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contato](#contato)
- [Licença](#licença)

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

## Installation

Clone this repository:

   ```bash
   git clone git@github.com:ElieltonRamos/project-fullstack-login-social.git
   ```

Navigate to the project directory:

   ```bash
cd project-fullstack-login-social
   ```

Install dependencies (if not using Docker):

   ``` bash
npm install
   ```

If not using Docker, start the frontend manually:

   ``` bash
npm run dev
   ```

If using Docker (recommended), run the commands below:

Start Docker Compose:

   ``` bash
docker compose up -d --build
   ```

Start the application:

The node container is configured to keep the application online automatically. To view the application logs, run the following command:

   ``` bash
docker logs -f frontend
   ```

## Project Standards

  <img src="https://micreiros.com/wp-content/uploads/designpatterns-720x340.png" alt="logo docker" width="150px">

The frontend was developed following a pattern of pages and components, allowing code reuse and facilitating application maintenance and scalability. The project structure is organized as follows:

- pages: contains the application pages, which are accessed through routes.
- components: contains the reusable components of the application, which are used in different parts of the application.
- services: contains the services that make calls to the backend's RESTful API.
- context: contains the application contexts, which are used to share states between components.
- types: contains the types of data used in the application.

The project was developed with React, Tailwind CSS and Typescript, following the best code development and design practices, seeking to keep the code clean, organized and easy to maintain.

## framework CSS

   <img src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg" alt="logo tailwind" width="150px">

I used Tailwind CSS because it is a framework that allows creating customized and responsive user interfaces quickly and efficiently. It provides a series of utility classes that can be applied directly in the HTML, allowing flexible and consistent element styling, which facilitates development and code maintenance.

## Vite + React

   <img src="https://pt.vitejs.dev/og-image-announcing-vite4-3.png" alt="logo vite" width="150px">

I used Vite to create the frontend project because it is a fast and modern development environment that offers a high-quality development experience. Vite is a web application builder that provides a fast and efficient development environment with support for React, Vue, and other popular libraries. It offers a series of advanced features like fast loading, hot reloading, and TypeScript support, making web application development more productive and enjoyable.

## React JS

   <img src="https://cdn.thexcodes.com/imgs/reactJS.png" alt="logo react" width="150px">

I used React to develop the application's user interface because it is a popular and widely used JavaScript library for creating interactive and responsive user interfaces. React offers a series of advanced features like reusable components, states, and properties, which facilitate the development of modern and scalable web applications. Additionally, React is highly flexible and extensible, allowing easy integration with other libraries and frameworks like Tailwind CSS and Vite.

## Typescript

   <img src="https://logowik.com/content/uploads/images/nodejs.jpg" alt="logo node" width="150px">

I used TypeScript to develop the application because it is a typed and high-level programming language that offers support for static types and interfaces, helping to detect errors more efficiently and improve code quality. TypeScript is an extension of JavaScript that adds advanced features like static typing, classes, interfaces, and modules, making web application development safer, more productive, and scalable.

## Usage

The front end application will be available at http://localhost:3000, where you can access the user interface and interact with the backend RESTful API. The frontend has the following pages available:

1. **Page: /**

   - Application home page, where it is possible to log in with an already registered email and password.
   - If you enter an incorrect email or password, an error message will be displayed.
   - If you don't have a registration, you can register by clicking the "Create New Account" button.
   - After logging in, the user will be redirected to the posts page.

2. **Page: /register**

   - User registration page, where you can enter a name, email and password to create an account.
   - If the email is already registered, an error message will be displayed.
   - If you want to return to the login page, you can click on the "Back" button.
   - The name, email and password fields are mandatory.
   - After registration, the user will be redirected to the posts page.

3. **Page: /home**

   - Posts page, where you can view all registered posts.
   - If you do not have any posts registered, a message will be displayed informing you that there are no posts.
   - If you want to create a new post, you can click on the "Send" button, blue button.
   - If you want to exit the application, you can click on the "Exit" button, icon in the top corner of the screen.
   - If you want to edit a post, you can click on the "Edit" button, icon present in the top corner of the post.
   - If you want to delete a post, you can click on the "Delete" button, icon present in the top corner of the post.
   - The edit and delete buttons will only be available to the user who created the post.
   - When you click on your profile photo in the navbar, you will be redirected to the profile page.
   - When you click on "social login" in the navbar, you will be redirected to the /home page.
   - There is a toggle in the top right corner of the screen, which allows you to choose between newer and older posts.
   - There is a search field in the top right corner of the screen, which allows you to search for posts by title and content.

4. **Page: /profile**

   - User profile page, where it is possible to view the logged in user's information.
   - If you want to edit user information, you can click on the "Edit" button.
   - It is possible to send a profile photo by clicking on the "Send Photo" input.
   - Name and email are mandatory fields.
   - Image and an optional field.
   - If you want to return to the posts page, you can click on "social login" in the nav bar.
   - If you want to exit the application, you can click on the "Exit" button, icon in the top corner of the screen.
   - It is possible to view the posts created by the logged in user, they are loaded automatically."
   - It is possible to create, edit and delete a post on this page.

5. **Page: /not-found**

   - 404 error page, if the route accessed does not exist.

## Contact

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

