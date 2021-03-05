
# LaBurger

<div align="center">
<img src="https://trello-attachments.s3.amazonaws.com/6025d7e79baba060fe9cc8cf/500x500/cb44633086192050bddfc77f5e209df6/_Logotipo-removebg-preview_%281%29.png" alt="Logo do restaurante"
width="300"
height="300">
</div>


## Índice

- [1. Introdução](#1-Introdução)
- [2. Planejamento e Organização](#2-planejamento-e-organização)
- [3. Design UX e UI](#3-Design-UX-e-UI)
- [4. Desenvolvimento](#4-desenvolvimento)
- [5. Desenvolvedoras](#5-desenvolvedoras)

---

## 1. Introdução

Foi proposto pela [Laboratória](https://github.com/Laboratoria), um projeto por demanda onde o cliente é uma hamburgueria, ele necessita facilitar o fluxo dos pedidos enviados para a cozinha. Foi estabelecido o uso de [React](https://reactjs.org/) para o desenvolvimento da interface web [Single Page Application (SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica), que deve usar requisições da API fornecida e ser especificamente responsivo para tablets. 

### Sobre 

A LaBurguer é a hamburgueria no qual foi desenvolvido uma aplicação, para facilitar que os pedidos sejam executados e entregues, de maneira organizada e prática.

---

## 2. Planejamento e Organização

O projeto foi realizado através da metodologia ágil, utilizando o [Trello](https://trello.com/) como ferramenta de planejamento. 

![Imagem!](https://trello-attachments.s3.amazonaws.com/6020b3a2293a2449d45c3caf/603ea838eccc46598e53a5a7/aceae2ddc0c03315db0ed47e413a1022/trello.png)

---

## 3. Design UX e UI

O projeto foi elaborado conforme as histórias de usuários e suas definições de pronto. Assim, desenvolvemos todo o seu design conforme essas demandas, visando a melhor experiência dos nossos usuários.

### Ideação

![Imagem!](https://trello-attachments.s3.amazonaws.com/6020b3a2293a2449d45c3caf/6042a6c8603c595a9fcd7f5e/ac9f9fd6733dc2b3c90d2773da0d5e9c/historia1.jpg)
##### Critérios de aceitação:
O que deve acontecer para satisfazer as necessidades do usuário?
- Criar login e senha.
- Registar tipo de usuário (cozinha / salão), login e senha.
- Entrar na tela correta para cada usuário.
##### Definição de pronto:
O acordado abaixo deve acontecer para dizer que a história está terminada:
- Você fez _testes_ de usabilidade e incorporou o feedback do usuário.
- Você deu deploy de seu aplicativo.

![Imagem!](https://trello-attachments.s3.amazonaws.com/6020b3a2293a2449d45c3caf/6042a6c8603c595a9fcd7f5e/bf06a4de52cf9754f95269560fb60333/historia2.jpg)
##### Critérios de aceitação:
O que deve acontecer para satisfazer as necessidades do usuário?
- Anotar o nome e mesa.
- Adicionar produtos aos pedidos.
- Excluir produtos.
- Ver resumo e o total da compra.
- Enviar o pedido para a cozinha (guardar em algum banco de dados).
- Funcionar bem e se adequar a um tablet.
##### Definição de pronto:
O acordado abaixo deve acontecer para dizer que a história está terminada:
- Você fez testes de usabilidade e incorporou o feedback do usuário.
- Você deu deploy de seu aplicativo.

![Imagem!](https://trello-attachments.s3.amazonaws.com/6020b3a2293a2449d45c3caf/6042a6c8603c595a9fcd7f5e/adb92529c7b328eb4f95a8d3d02f9d7e/historia3.jpg)
##### Critérios de aceitação:
- Ver os pedidos à medida em que são feitos.
- Marcar os pedidos que foram preparados e estão prontos para serem servidos.
- Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.
##### Definição de pronto:
- Você fez testes de usabilidade e incorporou o feedback do usuário.
- Você deu deploy de seu aplicativo.

![Imagem!](https://trello-attachments.s3.amazonaws.com/6020b3a2293a2449d45c3caf/6042a6c8603c595a9fcd7f5e/283cdd40e4ee8fb2006c2f89f8941532/historia4.jpg)
##### Critérios de aceitação:
- Ver a lista de pedidos prontos para servir.
- Marque os pedidos que foram entregues.
##### Definição de pronto:
- Você fez testes de usabilidade e incorporou o feedback do usuário.
- Você deu deploy de seu aplicativo.
- Os dados devem ser mantidos intactos, mesmo depois que um pedido foi terminado. Tudo isso para poder ter estatísticas no futuro.

A partir do detalhamento das histórias de usuário e documentação do projeto, fizemos um fluxograma inicial das funcionalidades da aplicação.

![Imagem!](https://trello-attachments.s3.amazonaws.com/6020b3a2293a2449d45c3caf/6025fa7e132aaa2263e06234/1273x1473/8baaadb4c8dced88a900782e1677b935/Fluxograma.png) 

### Prototipagem

Começamos desenvolvendo um protótipo de baixa fidelidade, onde surgiram as primeiras ideias sobre o design do projeto.
![Imagem!](https://trello-attachments.s3.amazonaws.com/6021a23c18997b6d3a625ef5/1152x648/784af5ddec80c446ae82468e41e8ef75/f25a9f01-5974-483d-b687-aa4f99e02d37.jpg) 

A paleta de cores que utlizamos foi inspirado na [Laboratória](https://github.com/Laboratoria), assim como seu nome. 

![Imagem!](https://trello-attachments.s3.amazonaws.com/6041ac3023d40e1468f232e1/518x191/65a70f35e0e638e2b960ad194ad8c6ba/cores.png)

Pesquisamos sites e aplicações de delivery de hamburguerias, com a intenção de entender o fluxo e assim elaborar seu design.

Após, criamos protótipos de alta-fidelidade, para tablet, com o [Figma](https://www.figma.com/).

![Imagem!](https://trello-attachments.s3.amazonaws.com/6022b7c6b912fe7ad26965a8/595x410/edf16f4d55dac6664f40f23f8453a9e5/t1.png)
![Imagem!](https://trello-attachments.s3.amazonaws.com/6022b7c6b912fe7ad26965a8/593x413/9de56bc9315da993ef5f79b5cc798b55/t2.png)
![Imagem!](https://trello-attachments.s3.amazonaws.com/6022b7c6b912fe7ad26965a8/598x417/f30cdb8a70ccb3dd9ecdbda78dc38788/t3.png)
![Imagem!](https://trello-attachments.s3.amazonaws.com/6022b7c6b912fe7ad26965a8/594x414/547b5273180624cc8a4d8b989d51701f/t4.png)

### Testes com Usuários

Alguns usuários utilizaram a versão do protótipo de alta-fidelidade para testar o fluxo de tarefas, e também hdurante o desenvolvimento do projeto, o que acarretou em algumas mudanças, como não ter o uso de imagens no menu, a localização de alguns botões, assim como algumas alterações no fluxo de uso.

---
## 4. Desenvolvimento

Como solicitado, a aplicação foi desenvolvida em [React](https://reactjs.org/) como um [Single Page Application (SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica), utilizando a API fornecida.

Durante o processo, mudanças foram adotadas para melhor desempenho da aplicação, baseada nos testes de usuários.

Utilizamos CSS puro, com responsividade para tablet.

<!-- ![Imagem!](gif) -->

## Conheça nossa aplicação [aqui!](https://burger-queen-laburger.vercel.app/)
Você pode criar, ou acessar com os logins:
<div align="center">

### Salão
<p>email: lb@salao.com</p>
<p>senha: 12345678</p>

### Cozinha
<p>email: lb@cozinha.com</p>
<p>senha: 12345678</p>
</div>

<div align="center">
<img src="./public/img/gifBurger.gif" alt="Logo do restaurante"
width="300">
</div>

---
## 5. Desenvolvedoras

Desenvolvido por [Alessandra](https://github.com/ale-alve) e [Julia](https://github.com/JuliaTerin).

