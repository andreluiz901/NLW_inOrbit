# NLW_inOrbit - Documentação

Este projeto foi desenvolvido durante o evento **Next Level Week** da **RocketSeat**, onde construímos uma aplicação full-stack para gerenciamento de metas pessoais. A aplicação foi desenvolvida utilizando tecnologias modernas tanto no front-end quanto no back-end, focando na performance e boas práticas.

## Tecnologias Utilizadas

### Frontend

- **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build para desenvolvimento rápido e leve.
- **[TailwindCSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização.
- **[Radix UI](https://www.radix-ui.com/)**: Componentes acessíveis e descomplicados para interfaces.
- **[Zod](https://zod.dev/)**: Validação e parsing de esquemas no frontend.
- **[TanStack Query](https://tanstack.com/query/v4)**: Gerenciamento de estado e cache para operações assíncronas.
- **[dayjs](https://day.js.org/)**: Biblioteca para manipulação e formatação de datas.

### Backend

- **[Node.js](https://nodejs.org/)**: Plataforma de execução JavaScript.
- **[Fastify](https://www.fastify.io/)**: Framework web focado em performance.
- **[PostgreSQL](https://www.postgresql.org/)**: Banco de dados relacional open-source.
- **[Drizzle ORM](https://orm.drizzle.team/)**: ORM leve e focado em SQL explícito.
- **[Docker](https://www.docker.com/)**: Plataforma para containerização de aplicações.
- **[CUID](https://github.com/paralleldrive/cuid2)**: Gerador de identificadores únicos em vez de UUID.
- **[BiomeJS](https://biomejs.dev/)**: Ferramenta de linting e formatação de código.

---

## Estrutura do Projeto

### Frontend

No frontend, utilizamos o **React** com **Vite** para uma experiência de desenvolvimento rápida e eficiente. O design responsivo foi implementado utilizando **TailwindCSS**, com componentes modulares criados através do **Radix UI**. A validação de dados e esquemas foi realizada com o **Zod**, garantindo uma integração fluida com os componentes de formulário.

#### Principais Páginas e Componentes

- **Página de Metas**: Exibe uma lista de metas diárias, permitindo ao usuário adicionar, visualizar e completar metas.
- **Formulário de Criação de Metas**: Gerenciado pelo **TanStack Query**, otimizando a comunicação com o back-end e evitando recarregamentos desnecessários.
- **Manipulação de Datas**: Implementada com **dayjs**, facilitando a exibição e formatação de datas.

### Backend

O back-end foi construído utilizando **Node.js** com **Fastify**, visando alta performance e baixa sobrecarga. Utilizamos **Drizzle ORM** para manipulação de dados no banco **PostgreSQL**, e as operações de banco de dados foram otimizadas com o uso de **Common Table Expressions (CTE)** no SQL.

#### Arquitetura

- **Roteamento**: Definido com Fastify, organizando as rotas para criar, atualizar e listar metas.
- **Validação de Dados**: Utilizada tanto no frontend quanto no backend com o **Zod**, garantindo que os dados recebidos estejam no formato correto.
- **Banco de Dados**: Postgres foi escolhido para o armazenamento de dados. Queries complexas foram otimizadas com CTEs, facilitando a resolução de regras de negócio sem complicações.

---

## Common Table Expressions (CTE) no SQL

Para lidar com as operações mais complexas no banco de dados, utilizamos **CTEs (Common Table Expressions)**. Elas permitem a criação de subconsultas temporárias dentro de uma consulta maior, facilitando a leitura e manutenção de queries mais complexas.

## Consideraçõe Finais

Este projeto me proporcionou uma oportunidade de experimentar novas ferramentas e conceitos, como o uso de CUID em vez de UUID e o gerenciamento de queries complexas com CTEs. Também pude aprofundar meu conhecimento no uso de hooks com React e trabalhar com TanStack Query para otimizar a interação com o back-end.

Se tiver interesse em contribuir ou explorar mais detalhes, fique à vontade para clonar este repositório, abrir uma issue ou enviar um pull request.
