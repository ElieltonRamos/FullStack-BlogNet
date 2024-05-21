# Boas-vindas ao repositório do projeto FullStack Login Social

## <p align="center">Frontend</p>


<p align="center">
  <img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" alt="logo docker" width="300px">
  <img src="https://pt.vitejs.dev/og-image-announcing-vite4-3.png" alt="logo vite" width="300px">
  <img src="https://logowik.com/content/uploads/images/nodejs.jpg" alt="logo node" width="300px">
  <img src="https://cdn.thexcodes.com/imgs/reactJS.png" alt="logo react" width="300px">
  <img src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg" alt="logo tailwind" width="300px">
  <img src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0mrmucemyb2p06hcxa5c.png" width="300px">
</p>

Apresento o projeto FullStack Login Social, um projeto que conta com um frontend e um backend escritos em typescript que oferece um sistema de blog completo desenvolvido em Node.js com e orquestrado com Docker, este e o repositório do frontend do projeto. Desenvolvido com Vite, React, Tailwind CSS e typescript. O frontend é responsável por fornecer uma interface de usuário intuitiva e responsiva para interagir com a API RESTful do backend.

## 🐳 Docker 

  <img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" alt="logo docker" width="150px">

O Docker foi utilizado neste projeto para facilitar a configuração e execução do ambiente de desenvolvimento. Com o Docker, é possível encapsular a aplicação, suas dependências e o banco de dados em contêineres isolados, garantindo que ela possa ser executada de maneira consistente em diferentes ambientes.

O arquivo docker-compose.yml define a configuração dos contêineres necessários para o projeto. Com um único comando, os contêineres podem ser inicializados, permitindo que o ambiente de desenvolvimento seja configurado de forma rápida e fácil.

## Tecnologias Utilizadas

[Node JS](https://nodejs.org/en/docs)

[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

[Typescript](https://www.typescriptlang.org/)

[Docker](https://www.docker.com/get-started/)

[Tailwind](https://tailwindcss.com/)

[React JS](https://react.dev/)

[Vite](https://vitejs.dev/guide/)

## Índice

- [Ambiente de Desenvolvimento](#requisitos)
- [Padroes do projeto](#padroes-do-projeto)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contato](#contato)
- [Licença](#licença)

## Ambiente de Desenvolvimento

Para desenvolver e executar esta aplicação, é necessário configurar um ambiente com as seguintes ferramentas:

**Docker**: Utilizamos o Docker para empacotar e isolar a aplicação em contêineres, garantindo uma implantação consistente e fácil gerenciamento de dependências.

- [Como instalar o docker](https://docs.docker.com/engine/install/ubuntu/)

**Docker Compose**: O Docker Compose é uma ferramenta que simplifica a definição e o gerenciamento de serviços multi-contêiner em um único arquivo, ideal para orquestrar contêineres relacionados à aplicação.

- [Como instalar o Docker-Compose](https://docs.docker.com/compose/install/)

### Caso não queira instalar o docker e necessario instalar o Node JS na sua maquina

**Node.js**: A aplicação é desenvolvida em Node.js, uma plataforma de tempo de execução JavaScript/Typescript, e é necessária para executar o código.

- [Como instalar o Node.js](https://nodejs.org/en/download/package-manager)


Certifique-se de instalar e configurar essas ferramentas em seu ambiente de desenvolvimento antes de iniciar o projeto.

## Instalação

Clone este repositório:

   ```bash
   git clone git@github.com:ElieltonRamos/project-fullstack-login-social.git
   ```

Navegue até o diretório do projeto:

   ```bash
cd project-fullstack-login-social
   ```

Instale as dependências (caso não esteja usando docker):

   ``` bash
cd frontend-login-social && npm install
   ```

Caso não va utilizar o docker e necessario iniciar o frontend manualmente

   ``` bash
npm run dev
   ```

Caso va utilizar o docker (indicado), execute os comandos abaixo

Inicie o docker compose:

   ``` bash
docker compose up -d --build
   ```

Inicie a aplicação:

  O container do node ja esta configurado para deixar a aplicação online automaticamente, caso queira ver os logs da aplicação, execute o seguinte comando

   ``` bash
docker logs -f frontend
   ```

## Uso

A aplicação front end estará disponível em http://localhost:3000, onde você poderá acessar a interface de usuário e interagir com a API RESTful do backend. O frontend possui as seguintes paginas disponíveis:

1. **Pagina: /**

   - Pagina inicial da aplicação, onde e possivel fazer o login com um email e senha ja cadastrados.
   - Caso insira email ou senha incorretos, sera exibido uma mensagem de erro.
   - Caso não tenha um cadastro, e possivel se cadastrar clicando no botão "Criar Nova Conta".
   - Apos o login, o usuário sera redirecionado para a pagina de posts.

2. **Pagina: /register**

   - Pagina de cadastro de usuário, onde e possivel inserir um nome, email e senha para criar uma conta.
   - Caso o email ja esteja cadastrado, sera exibido uma mensagem de erro.
   - Caso queira voltar para a pagina de login, e possivel clicando no botão "Voltar".
   - Os campos de nome, email e senha são obrigatórios.
   - Apos o cadastro, o usuário sera redirecionado para a pagina de posts.

3. **Pagina: /home**

   - Pagina de posts, onde e possivel visualizar todos os posts cadastrados.
   - Caso não tenha nenhum post cadastrado, sera exibido uma mensagem informando que não ha posts.
   - Caso queira criar um novo post, e possivel clicando no botão "Novo Post".
   - Caso queira sair da aplicação, e possivel clicando no botão "Sair".
   - 

## Contato

Elielton Ramos

[![Envie-me um e-mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:elieltonramos14@gmail.com)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/elielton-ramos/)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](elielton6554)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/elieltonramos08/)

## Licença

Código Aberto (Open Source)

Este projeto é de código aberto e está disponível para toda a comunidade. Fique à vontade para explorar, clonar e contribuir para o projeto.

## Agradecimentos

Agradeço por todas as horas dedicadas, os desafios superados e as lições aprendidas durante o desenvolvimento deste projeto. Cada linha de código escrita foi um passo em direção ao meu crescimento como desenvolvedor e ao sucesso deste empreendimento.

Também gostaria de estender meu agradecimento a todos os recursos educacionais, documentações e comunidades online que me forneceram orientação, inspiração e suporte ao longo deste processo.

