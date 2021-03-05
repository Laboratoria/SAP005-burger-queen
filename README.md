 <h1 align='center'>
 <img  alt='Logo Urban Bistro'  src='src\assets\logo.png' />
 </h1>

# <h1 align="center">Urban Bistro</h1>
>:sparkles:Para acessar nossa aplicação [Clique aqui](urban-bistro.vercel.app/):sparkles:
___
## Índice

- [Introdução](#introdução)
- [Histórias de Usuario](#histórias-de-usuários)
- [Funcionalidades](#funcionalidades)
- [Planejamento e Organização](#planejamento-e-organização)
- [Testes](#testes)
- [Instalação](#instalação)
- [Dependências](#dependências)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Desenvolvedoras](#desenvolvedoras)

---

### Introdução

A partir do projeto proposto pela [Laboratória](https://github.com/Laboratoria/SAP005-burger-queen), desenvolvemos em dupla uma aplicação 100% por demanda, suprindo de forma ordenada e eficiente as histórias de usuário. Implementamos uma aplicação de gestão de um restaurante, onde a interface é sincronizada entre os pedidos do salão(realizados através de um Tablet) e a cozinha.

<h4 align="center">
<img src='https://www.hypeness.com.br/1/2021/02/7d47e737-bela-e-a-fera-comidas.gif' >
</h4>


### Histórias de Usuários

As Histórias de usuário foram fornecidas por um restaurante em expansão, e seguem abaixo:

- Eu, como funcionário do restaurante, quero entrar na plataforma e ver apenas a tela que for importante para o meu trabalho.

- Eu, como garçom/garçonete, quero poder anotar o meu pedido, saber o valor de cada
produto e poder enviar o pedido para a cozinha para ser preparado.

- Eu, como chefe de cozinha, quero ver os pedidos dos clientes em ordem, poder marcar quando estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.

- Eu, como garçom/garçonete, quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.

### Funcionalidades

##### 1: Criar perfil

- [x] Poder realizar cadastro com e-mail, senha e função.
- [x] Poder realizar login com e-mail e senha.
- [x] Redirecionar para a tela correta.

##### 2: Anotar pedidos

- [x] Digitar o nome do cliente e mesa.
- [x] Filtrar _menu_ para _café da manhã_ e _almoço/jantar_.
- [x] Adicionar item ao pedido.
- [x] Excluir item do pedido.
- [x] Mostrar _resumo_ do pedido com todos os itens e o total.
- [x] Enviar para a cozinha (isso deve salvar o pedido).

##### 3: Ver pedidos na cozinha

- [x] Visualizar pedidos pendentes para produção.
- [x] Marcar pedido como pronto para entrega.
- [x] Ver histórico dos pedidos.

##### 4: Entrega de pedidos

- [x] Visualizar pedidos pendentes para entrega.
- [x] Marcar pedido como entregue ao cliente.

##### 5: UX

- [x] Funciona bem em tablets.
- [x] Fácil utilização em telas sensíveis ao toque.
- [x] Status atual do pedido sempre visível enquanto fazemos um pedido.

### Planejamento e Organização
📌Organização

Ao recebermos esse projeto, definimos as sprints de acordo com cada história de usuário. Utilizando o método Kanban, organizado através do [Trello](https://trello.com/pt-BR)

![imagen trello](src\assets\imgs\ubTrello.jpg)

📌Interface
Desenvolvemos o wireframe para ser amigável ao usuário e de fácil compreensão.

📄 WireFrame

![img Login](https://trello-attachments.s3.amazonaws.com/601c549047c64b3dc376bd85/1010x1220/fd38ad852f11f0394bc6f0e897560bc2/login-portrait.png)

![img Cadastro](https://trello-attachments.s3.amazonaws.com/601c549047c64b3dc376bd85/1010x1220/057cc2ee716d360008cf1fae84264d5c/cadastro-portrait.png)

![img menu](https://trello-attachments.s3.amazonaws.com/601c423608a1107589520244/601c549047c64b3dc376bd85/d2bd51f0d76fe59bd49b1ace5e6cdfe9/pedido-menu-landscape.png)

![img menuitens](https://trello-attachments.s3.amazonaws.com/601c423608a1107589520244/601c549047c64b3dc376bd85/e130addd8d3da6627060d2a5a14bf493/pedido-menu-opcoes-landscape.png)

![img pedidos](https://trello-attachments.s3.amazonaws.com/601c423608a1107589520244/601c549047c64b3dc376bd85/41c42ca1c9fb2696d9bcd838a485fcd2/pedido-status-landscape.png)

![img cozinha](https://trello-attachments.s3.amazonaws.com/601c423608a1107589520244/601c549047c64b3dc376bd85/29301c58aff7b5b983d62cf156adc6d1/pedido-status-cozinha-landscape.png)

✔️ Interface Final Tablet

![img Tablet](src\assets\imgs\ubTabletLogin.jpg)


📌Harmonização Visual
Queríamos manter a estética minimalista e com cores agradáveis ao olhar. Mantemos o padrão entre o logo e a aplicação utilizando a paleta disposta abaixo.

☑️ Paleta de Cores

![Paleta](https://trello-attachments.s3.amazonaws.com/601c423608a1107589520244/601c550785833f2f8c4e9800/cd001c684e990df6706e9906e4ca5a8b/AdobeColor-burguer-queen.jpeg)


### Testes

A partir do primeiro deploy da aplicação, conseguimos testar a usabilidade durante o processo de desenvolvimento. Com isso, identificamos que:

❌ Os usuários apontaram que a paleta de cores estava escura e dificultava a utilização da aplicação.

✔️ Alteramos a paleta de cores e adotamos tons mais claros.


### Instalação

Antes de começar, é preciso ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com);
[Node.js](https://nodejs.org/en/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

Para iniciar este projeto, é necessário realizar um _fork_ e _clone_ deste repositório<https://github.com/CarolineSCosta/SAP005-burger-queen.git>.

### Dependências

![REACT](https://img.shields.io/badge/REACT-17.0.1-brightgreen)
![REACT-DOM](https://img.shields.io/badge/REACT--DOM-17.0.1-brightgreen)
![REACT-ICONS](https://img.shields.io/badge/REACT--ICONS-4.2.0-brightgreen)
![REACT-MODAL](https://img.shields.io/badge/REACT--MODAL-3.12.1-brightgreen)
![REACT-ROUTER](https://img.shields.io/badge/REACT--ROUTER-5.2.0-brightgreen)
![REACT-ROUTER-DOM](https://img.shields.io/badge/REACT--ROUTER--DOM-5.2.0-brightgreen)
![REACT-SCRIPTS](https://img.shields.io/badge/REACT--SCRIPTS-4.0.2-brightgreen)
![WEB-VITALS](https://img.shields.io/badge/WEB--VITALS-1.1.0-green)


### Tecnologias utilizadas

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Routes](https://reactrouter.com/web/guides/quick-start)
- [React + Fetch](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples)
- [React Modal](https://www.npmjs.com/package/react-modal)
- [Deploy + Vercel](https://vercel.com/dashboard)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

### Desenvolvedoras


 <img style="border-radius: 50%;" src="https://trello-members.s3.amazonaws.com/5761c7f01e4799bd615d27c4/77a78139f98bf137e41f9733b34227bb/original.png" width="100px;" alt="Foto Carol"/>
 <br />
 <sub><b>Caroline Costa</b></sub>

 [![Linkedin Badge](https://img.shields.io/badge/-Carol-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/carolinescosta/)](https://www.linkedin.com/in/carolinescosta/) 

 [![GitHub Badge](https://img.shields.io/github/followers/CarolineSCosta?label=Carol&style=social)](https://github.com/CarolineSCosta)


 <img  style="border-radius: 50%;" src="https://trello-members.s3.amazonaws.com/5f2016fa61b72f2f43291e33/014299053b1f879e01fd511b01695e77/original.png" width="100px;" alt="Foto Elis"/>
 <br />
 <sub><b>Elis Brasil</b></sub> 

 [![Linkedin Badge](https://img.shields.io/badge/-Elis-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/brasil-elis/)](https://www.linkedin.com/in/brasil-elis/) 

 [![GitHub Badge](https://img.shields.io/github/followers/Elis-ctrl?label=Elis&style=social)](https://github.com/Elis-ctrl)

👋🏽 Entre em contato!