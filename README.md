 <h1 align='center'>
 <img  alt='Logo Urban Bistro'  src='src\assets\logo.png' />
 </h1>

# <h1 align="center">Urban Bistro</h1>
>:sparkles:Para acessar nossa aplicação [Clique aqui](urban-bistro.vercel.app/):sparkles:
___
## Índice

- [1. Introdução](#1-Introdução)
- [2. Histórias de Usuario](#2-Histórias-de-Usuários)
- [3. Planejamento e Organização](#3-planejamento-e-organização)
- [4. Considerações gerais](#4-considerações-gerais)
- [5. Critérios de aceitação mínimos do
  projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
- [6. Hacker Edition](#6-hacker-edition)
- [7. Dicas e leituras complementares](#7-dicas-e-leituras-complementares)
- [8. Checklist](#8-checklist)

---

✅ Status do Projeto
<h4 align="center"> 
	🎆  Urban bistro -  Concluído  🎆
</h4>

---

### 1. Introdução

A partir do projeto proposto pela [Laboratória](https://github.com/Laboratoria/SAP005-burger-queen), o Burguer Queen. Desenvolvemos em dupla uma aplicação 100% por demanda para suprir de forma ordenada e eficiente as histórias de usuário de um restaurante. Desenvolvemos uma aplicação de gestão, onde a interface é sincronizada entre os pedidos(realizados através de um Tablet) e a cozinha.

![gifBela](https://www.hypeness.com.br/1/2021/02/7d47e737-bela-e-a-fera-comidas.gif)


### 2. Histórias de Usuários

As Histórias de usuário foram fornecidas por um fast food em expansão, e seguem abaixo:

1. Eu como funcionário do restaurante quero entrar na plataforma e ver apenas a tela importante para o meu trabalho.

2. Eu como garçom/garçonete quero poder anotar o meu pedido saber o valor de cada
produto e poder enviar o pedido para a cozinha para ser preparado.

3. Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.

4. Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.

## Funcionalidades

HU 1: Criar perfil

[x] Poder realizar cadastro com e-mail, senha e função.
 Poder realizar login com e-mail e senha.
 Redirecionar para a tela correta.
HU 2: Anotar pedidos
 Digitar o nome do cliente e mesa.
 Filtrar menu para café da manhã e almoço/jantar.
 Adicionar item ao pedido.
 Excluir item do pedido.
 Mostrar resumo do pedido com todos os itens e o total.
 Enviar para a cozinha (isso deve salvar o pedido).
HU 3: Ver pedidos na cozinha
 Visualizar pedidos pendentes para produção.
 Marcar pedido como pronto para entrega.
 Ver histórico dos pedidos.
HU 4: Entrega de pedidos
 Visualizar pedidos pendentes para entrega.
 Marcar pedido como entregue ao cliente.
UX
 Funciona bem em tablets.
 Fácil utilização em telas sensíveis ao toque.
 Status atual do pedido sempre visível enquanto fazemos um pedido.

## 3. Planejamento e Organização
📌Organização

Ao recebermos esse projeto, definimos as sprints de acordo com cada historia de usuario. Utilizando o método Kanban organizado através do [Trello](https://trello.com/pt-BR)
![imagen trello](src\assets\imgs\ubTrello.jpg)

📌Interface
Desenvolvemos o wireframe para ser amigável ao usuário e de fácil compreensão.

📄 WireFrame

![img Login](https://trello-attachments.s3.amazonaws.com/601c423608a1107589520244/601c549047c64b3dc376bd85/924caf01ca6ae73cf0a467f8cacdaacb/login-portrait.png)

✔️ Interface Final Tablet

![img Tablet](src\assets\imgs\ubTabletLogin.jpg)

🔲 Fluxograma da aplicação

![Fluxograma](https://trello-attachments.s3.amazonaws.com/601c543fb62fd88ab1f9eb85/851x641/e4e11491c0af1103c38844de16590234/burguer-queen-login-signup.png)

☑️ Paleta de Cores

![Paleta](https://trello-attachments.s3.amazonaws.com/601c423608a1107589520244/601c550785833f2f8c4e9800/cd001c684e990df6706e9906e4ca5a8b/AdobeColor-burguer-queen.jpeg)

## 4. Pré requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

Para iniciar este projeto você terá que fazer um _fork_ e _clone_ deste repositório.

 - Clone este repositório <https://github.com/CarolineSCosta/SAP005-burger-queen.git>
 - Acesse a pasta do projeto no seu terminal/cmd
- Instale as dependências
$ npm install
- Execute a aplicação em modo de desenvolvimento
$ npm run start
- A aplicação será aberta na porta:3000 - acesse http://localhost:3000

## 5. Tecnologias utilizadas

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Routes](https://reactrouter.com/web/guides/quick-start)
- [React + Fetch](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples)
- [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [Deploy + Vercel](https://vercel.com/dashboard)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

### Desenvolvedoras


 <img style="border-radius: 50%;" src="https://trello-members.s3.amazonaws.com/5761c7f01e4799bd615d27c4/77a78139f98bf137e41f9733b34227bb/original.png" width="100px;" alt=""/>
 <br />
 <sub><b>Caroline Costa</b></sub>

 [![Linkedin Badge](https://img.shields.io/badge/-Carol-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/brasil-elis/)](https://www.linkedin.com/in/brasil-elis/) 

 [![GitHub Badge](https://img.shields.io/github/followers/CarolineSCosta?label=Carol&style=social)](https://github.com/CarolineSCosta)


 <img  style="border-radius: 50%;" src="https://trello-members.s3.amazonaws.com/5f2016fa61b72f2f43291e33/014299053b1f879e01fd511b01695e77/original.png" width="100px;" alt=""/>
 <br />
 <sub><b>Elis Brasil</b></sub> 

 [![Linkedin Badge](https://img.shields.io/badge/-Elis-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/brasil-elis/)](https://www.linkedin.com/in/brasil-elis/) 

 [![GitHub Badge](https://img.shields.io/github/followers/Elis-ctrl?label=Elis&style=social)](https://github.com/Elis-ctrl)

👋🏽 Entre em contato!