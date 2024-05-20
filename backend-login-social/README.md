# Boas-vindas ao repositório do projeto FullStack Login Social

## <p align="center">Backend</p>


<p align="center">
  <img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" alt="logo docker" width="300px">
  <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/800px-MySQL.svg.png" alt="logo mysql" width="300px">
  <img src="https://logowik.com/content/uploads/images/nodejs.jpg" alt="logo node" width="300px">
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png" alt="logo express" width="300px">
  <img src="https://www.luiztools.com.br/wp-content/uploads/2021/01/sequelize.png" alt="logo sequelize" width="300px">
  <img src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0mrmucemyb2p06hcxa5c.png" width="300px">
</p>

Apresento o projeto FullStack Login Social, um projeto que conta com um frontend e um backend escritos em typescript que oferece um sistema de blog completo desenvolvido em Node.js com e orquestrado com Docker, com o auxílio do framework Express e do ORM Sequelize para interagir com o banco de dados MySQL. Esta e a documentação expecifica do backend, uma api que proporciona aos usuários funcionalidades essenciais, incluindo criação de contas, login seguro com autenticação JWT (JSON Web Token), criação, edicão e exclusão de posts.

## 🐳 Docker 

  <img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" alt="logo docker" width="150px">

O Docker foi utilizado neste projeto para facilitar a configuração e execução do ambiente de desenvolvimento. Com o Docker, é possível encapsular a aplicação, suas dependências e o banco de dados em contêineres isolados, garantindo que ela possa ser executada de maneira consistente em diferentes ambientes.

O arquivo docker-compose.yml define a configuração dos contêineres necessários para o projeto, incluindo o contêiner do banco de dados MySQL e o contêiner da aplicação Node.js. Com um único comando, os contêineres podem ser inicializados, permitindo que o ambiente de desenvolvimento seja configurado de forma rápida e fácil, alem de contar com testes automatizados com jest.

## Tecnologias Utilizadas

[Node JS](https://nodejs.org/en/docs)

[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

[Typescript](https://www.typescriptlang.org/)

[Docker](https://www.docker.com/get-started/)

[MySQL](https://www.mysql.com/)

[Express JS](https://expressjs.com/pt-br/)

[Jest](https://jestjs.io/pt-BR/docs/getting-started)

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

## Padroes do projeto

  <img src="https://micreiros.com/wp-content/uploads/designpatterns-720x340.png" alt="logo docker" width="150px">

O backend tem como base a arquitetura Model/Service/Controller (MSC), escolhi essa arquitetura pois separa de forma distinta o app, separando em diferentes responsabilidades do seu aplicativo em três camadas distintas, promovendo uma melhor organização e manutenção do código:

**Model:** Gerencia a lógica e a representação dos dados, interagindo diretamente com o banco de dados ou outras fontes de dados.

**Service:** Contém a lógica de negócios da aplicação. É responsável por processar dados entre o Controller e o Model.

**Controller:** Lida com as requisições HTTP, delegando tarefas às camadas de Service e Model, e retornando respostas apropriadas ao cliente.

## Escolha da linguagem e do framework

  <img src="https://www.devmedia.com.br/arquivos/Artigos/42224/image004.png" alt="logo docker" width="150px">

Escolhi o node juntamente com seu framework express e a linguagem javascript/typescript pois são ferramentas de facil entendimento e com uma comunidade grande, O TypeScript adiciona um sistema de tipagem estática ao JavaScript, detectando erros em tempo de compilação e oferecendo uma camada adicional de segurança ao código. Ele também melhora a legibilidade e a manutenibilidade do código, fornecendo recursos como IntelliSense e autocompletar em editores de código. O express e um framework minimalista que permite uma proximidade maior da linguagem e o node e o ambiente de execução ideal do javascript.

## Utilização de ORM (Object-Relational Mapping)

 <img src="https://miro.medium.com/v2/da:true/resize:fit:1200/0*UkOqM_a_agYwUOoV" alt="logo docker" width="150px">

Optei por utilizar um ORM pois possibilita o desacoplamento das regras dos bancos de dados, facilitando uma possivel mudança no futuro, alem de permitir a abstração da modelagem de dados, maior seguranca, proteção contra sql injection.

Utilizei o sequelize pois e um ORM do javascript, compativel com typescript, bem robusto, ja conhecido pela comunidade e que propricia completa manipulação do banco de dados atraves de codico javascript/typescript.

## Utilização do MySQL

  <img src="https://st4.depositphotos.com/14846838/22198/v/450/depositphotos_221986140-stock-illustration-database-server-data-protection-storage.jpg" alt="logo docker" width="150px">


Escolhi o MySQL como banco de dados para este projeto, pois e o que eu mais tive contato nos meus estudos, alem de ser conhecido por sua confiabilidade, escalabilidade e desempenho. O MySQL oferece suporte a uma ampla variedade de tipos de dados, funções e operadores, tornando-o uma escolha versátil para aplicações de todos os tamanhos. Com sua arquitetura cliente-servidor, o MySQL permite a conexão de várias aplicações ao mesmo banco de dados, garantindo a consistência e a integridade dos dados.

## Utilização do Json Web Token (JWT)

  <img src="https://pradeepl.com/blog/jwt/JWT-Cover.png" alt="logo docker" width="150px">


Como e uma aplicação em que o usuario precisa de autenticação optei pelo JWT, que oferece uma solução eficiente e segura para autenticação em aplicações web e APIs. Ele simplifica a autenticação ao permitir a verificação do usuário sem a necessidade de consultar o banco de dados a cada solicitação. Com sua estrutura simples e padronizada, JWT é facilmente implementado e interoperável em diferentes plataformas. Sua capacidade de incluir informações personalizadas no token oferece controle e flexibilidade na gestão de permissões e autorizações. Além disso, a assinatura digital garante a integridade dos dados do token, enquanto a criptografia opcional protege o conteúdo do token contra acesso não autorizado.

## Utilização do Bcript JS

  <img src="https://codeforgeek.com/wp-content/uploads/2023/02/Bcrypt-vs-BcryptJS.jpg" alt="logo docker" width="150px">


Para evitar maiores problemas em relação a vazamento de dados, utilizei o Bcript JS, uma biblioteca de criptografia segura e conhecida na comunidade, que permite a comparação de hash sem a necessidade explicita de descriptografar a senha. Além disso, sua flexibilidade permite ajustar o custo computacional do hashing para acompanhar o avanço da tecnologia. Ao utilizar o bcrypt.js, assegura-se a proteção das informações confidenciais dos usuários, promovendo a confiança e a integridade da aplicação.

## Utilização do jest

  <img src="https://miro.medium.com/v2/resize:fit:617/0*Kbpj6uYEDOzd0kbH.png" alt="logo docker" width="150px">


Como todo bom backend, este conta com testes automatizados, utilizei o jest como biblioteca de testes, pois ele e bem completo e nao precisa de muitas dependencias para ser usado, ele simplifica o processo de teste com uma sintaxe clara e fácil de usar, além de oferecer recursos avançados. Com sua execução paralela, o Jest é rápido e eficiente, sendo ideal para grandes conjuntos de testes. Ele oferece suporte integrado para criação de mocks, espionagem de funções e snapshot testing, facilitando a criação de testes isolados e a detecção de regressões. Além disso, o Jest integra-se perfeitamente com TypeScript, permitindo a escrita de testes com tipagem estática. Sua capacidade de integrar-se com ferramentas de transpilação como Babel e empacotamento como Webpack o torna uma escolha versátil para projetos de backend. 

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
npm install
   ```

Caso não va utilizar o docker e necessario iniciar o backend manualmente

   ``` bash
cd backend-login-social && npm run dev
   ```

Caso va utilizar o docker (indicado), execute os comandos abaixo

Inicie o docker compose:

   ``` bash
docker compose up -d --build
   ```

Inicie a aplicação:

  O container do node ja esta configurado para deixar a aplicação online automaticamente, caso queira ver os logs da aplicação, execute o seguinte comando

   ``` bash
docker logs -f backend
   ```

## Testes

O projeto conta com testes que verificam o funcionamento de cada rota da API, os testes foram escritos com JEST, lembrando que e necessario que o docker compose tenha sido executado para que os containers da apricação estejam online para que os testes funcionem.

Para executar os testes siga os seguintes passos:

Abra o terminal na raiz do projeto:

Execute o comando para entrar no container:

   ``` bash
docker exec -it backend sh
   ```

Execute o comando:

   ``` bash
npm test
   ```

Verifique a saida dos testes no seu terminal

Caso não tenha docker instalado instale as dependencias do projeto e execute o comando de teste:

   ``` bash
cd backend-login-social && npm install
   ```

Execute os testes:

   ``` bash
npm test
   ```

Veja a saida dos testes no seu terminal

## Uso

Explore as rotas essenciais desta API, incluindo autenticação, operações de CRUD e funcionalidades de pesquisa para uma administração eficaz de um blog.

1. **POST /login**
   - Recebe no body um json do tipo:

   { "email": string, "password": string }

   - Retorna um token JWT e um status http 200 caso usuario seja valido.
   - Caso o usuario nao exista, a senha esteja incorreta ou o usuario nao esteja cadastrado, retorna uma mensagem de erro.

2. **POST /register**
   - Recebe no body um json no formato:

   {"name": string, "email": string, "password": string, "image": string}

   - E possivel enviar a imagem de perfil do usuario em um formato base64
   - O campo image e opcional
   - Valida se os campos são validos e retorna um erro caso falte algum campo.
   - Faz um cadastro de um novo usuario no banco de dados, retorna um status http 201 e um token JWT.

3. **GET /register/user**
   - Para acessar essa rota e necessario informar um token JWT no header, no formato

      { "authorization": baerer (tokenJWT) }
   
   - Valida se o token foi enviado e retorna uma mensagem caso nao tenha sido enviado
   - Valida o token e retorna uma mensagem caso o token seja invalido
   - Caso o token seja valido retorna os dados do usuario que fez a requisição
   - Retorna um status http 200 e os dados do usuario

4. **PATCH register/user**
   - Para acessar essa rota e necessario informar um token JWT no header, no formato:

      { "authorization": baerer (tokenJWT) }
   
   - Valida o token e retorna uma mensagem caso o token seja invalido
   - Valida se o token foi enviado e retorna uma mensagem caso nao tenha sido enviado

   - Deve receber no body um json no formato:

      { "name": string, "email": string, "image": string }

   - Caso o token seja valido atualiza o usuario que fez a requisição com os dados do body
   - O campo image e opcional
   - Os campos name e email nao podem ser vazios
   - Retorna um status http 200 e o usuario atualizado

5. **POST /posts**
   - Para acessar essa rota e necessario informar um token JWT no header, no formato:

      { "authorization": baerer (tokenJWT) }
   
   - Valida se o token foi enviado e retorna uma mensagem caso nao tenha sido enviado
   - Valida o token e retorna uma mensagem caso o token seja invalido
   - Cria um novo post no banco de dados.
   - Recebe no body um json no formato:
   - E possivel enviar a imagem do post em um formato base64, mais e opcional
   - Title e content nao podem ser vazios
   - Valida se os campos sao validos e retorna um erro caso falte algum campo

      { "title": string, "content": string, image: string }

   - Retorna um status http 201 e o post criado.

6. **PATCH /posts/:id**
      - Valida se o token foi enviado e retorna uma mensagem caso nao tenha sido enviado
      - Valida o token e retorna uma mensagem caso o token seja invalido
      - Para acessar essa rota e necessario informar um token JWT no header, no formato:

         { "authorization": baerer (tokenJWT) }

      - Atualiza um post no banco de dados.
      - o ID do post deve ser informado na rota
      - Recebe no body um json no formato:

         { "title": string, "content": string, image: string }

      - E possivel enviar a imagem do post em um formato base64, mais e opcional
      - Valida se o post existe e retorna uma mensagem caso nao exista
      - Valida se o post pertence ao usuario que fez a requisição e retorna uma mensagem caso nao pertença
      - Title e content nao podem ser vazios
      - Valida se os campos sao validos e retorna um erro caso falte algum campo
      - Retorna um status http 200 e o post atualizado.
   

7. **GET /posts/:id**
      - Valida se o token foi enviado e retorna uma mensagem caso nao tenha sido enviado
      - Valida o token e retorna uma mensagem caso o token seja invalido
      - Para acessar essa rota e necessario informar um token JWT no header, no formato:

         { "authorization": baerer (tokenJWT) }

      - Retorna um post especifico do banco de dados.
      - o ID do post deve ser informado na rota
      - Valida se o post existe e retorna uma mensagem caso nao exista
      - Valida se o post pertence ao usuario que fez a requisição e retorna status 401 e uma mensagem de não autorizado caso nao pertença
      - Retorna um status http 200 e o post solicitado.

8. **DELETE /posts/:id**
      - Valida se o token foi enviado e retorna uma mensagem caso nao tenha sido enviado
      - Valida o token e retorna uma mensagem caso o token seja invalido
      - Para acessar essa rota e necessario informar um token JWT no header, no formato:

         { "authorization": baerer (tokenJWT) }

      - Delete um post especifico do banco de dados.
      - o ID do post deve ser informado na rota
      - Valida se o post existe e retorna uma mensagem caso nao exista
      - Valida se o post pertence ao usuario que fez a requisição e retorna status 401 e uma mensagem de não autorizado caso nao pertença
      - Retorna um status http 204 sem conteudo

9. **GET /posts**
      - Valida se o token foi enviado e retorna uma mensagem caso nao tenha sido enviado
      - Valida o token e retorna uma mensagem caso o token seja invalido
      - Para acessar essa rota e necessario informar um token JWT no header, no formato:

         { "authorization": baerer (tokenJWT) }

      - Caso não seja espeficificado alguma query na rota retorna todos os posts do banco de dados.
      - Retorna um status http 200 e os posts solicitados.
      - E possivel enviar as querys 'ASC' ou 'DESC' para ordenar os posts por data de criação.
         
         Exemplo:      /posts?order=ASC   OU   /posts?order=DESC

      - E possivel enviar a query 'USER' para retornar apenas os posts do usuario que fez a requisição

         Exemplo:   /posts?user=true

      - E possivel enviar a duas querys anteriores juntas para ordenar os posts do usuario que fez a requisição

         Exemplo:   /posts?user=true&order=ASC  OU   /posts?user=true&order=DESC

      - Retorna status 200 e os posts solicitados

10. **Tratamento de erros**

      - Todas as rotas possuem tratamento de erros.
      - Todas as controllers possuem um bloco try/catch para evitar a exposição de dados internos do servidor.
      - Caso ocorra algum erro ja esperado e retornado uma mensagem informando o que ocorreu.
      - Caso ocorra algum erro inesperado, a aplicação retorna um status http 500 e uma mensagem de erro.

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
