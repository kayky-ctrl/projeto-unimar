# UNIMAR Connect

Portal integrado de serviços acadêmicos da Universidade de Marília, desenvolvido em React + Vite.

## Funcionalidades

- **Dashboard**: Painel inicial com eventos, notícias e atalhos rápidos.
- **Autenticação**: Login e registro de usuários simulados.
- **Cursos**: Listagem e busca de cursos oferecidos.
- **Eventos**: Visualização de eventos acadêmicos e culturais, com calendário.
- **Serviços**: Acesso a biblioteca, financeiro, histórico acadêmico e matrícula.
- **Contato**: Formulário para contato com a universidade.
- **Mapa do Campus**: Mapa interativo com detalhes dos principais locais.
- **Notificações**: Central de notificações para avisos importantes.
- **Tema Claro/Escuro**: Alternância de tema visual.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [ESLint](https://eslint.org/) (com regras para React)
- CSS customizado (modo claro/escuro)

## Estrutura do Projeto
vite-project/ ├── public/ ├── src/ │ ├── assets/ │ ├── components/ │ ├── context/ │ ├── hooks/ │ ├── App.jsx │ ├── App.css │ └── main.jsx ├── package.json ├── vite.config.js └── ...

## Como rodar o projeto

1. **Instale as dependências:**
   ```sh
   npm install
    ```
2. **Instale as dependências:**
 ```sh
 npm run deV
```

3. **Acesse no navegador:**
```sh
http://localhost:5173
```

## Scripts disponíveis

npm run dev — inicia o servidor de desenvolvimento
npm run build — gera a build de produção
npm run preview — pré-visualiza a build
npm run lint — executa o ESLint

## Observações
O sistema de autenticação e dados é simulado no contexto do React, sem backend real.
O projeto é responsivo e possui suporte a tema escuro.
Para customizar dados, edite os arquivos em src/context/AppContext.jsx.

**Desenvolvido para fins acadêmicos e demonstração de integração de serviços universitários.**
