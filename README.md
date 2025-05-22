# 🎬 Projeto Catálogo de Filmes

Este é um projeto desenvolvido com **React** e **TypeScript**, que consome a API do The Movie Database (TMDB) para exibir informações sobre filmes e séries. O projeto utiliza **rotas com React Router** e está organizado para facilitar a escalabilidade e manutenção.

## 🚀 Tecnologias Utilizadas

- React
- TypeScript
- React Router DOM
- TMDB API

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo .env na raiz do projeto com as seguintes chaves para a API do TMDB:

```bash
VITE_API_KEY=sua_key_aqui
VITE_API=https://api.themoviedb.org/3
VITE_SEARCH=https://api.themoviedb.org/3/search/movie
VITE_IMAGE=https://image.tmdb.org/t/p/w500/
VITE_TOKEN_KEY=seu_token_aqui
```

🔐 Importante: Nunca compartilhe sua chave da API publicamente.

4. Execute o projeto:

```bash
npm run dev
```

🔑 Como obter sua chave da API do TMDB

Acesse https://www.themoviedb.org/
Crie uma conta ou faça login.
Vá até https://www.themoviedb.org/settings/api
Clique em "Create" e preencha os dados solicitados.
Após a aprovação, você terá acesso à sua chave de API.

🧭 Funcionalidades

Listagem de filmes populares
Detalhes de filmes e séries
Navegação entre páginas com React Router
Responsividade e boa experiência de usuário

📁 Estrutura de Pastas
```bash
src/
├── components/
├── pages/
├── routes/
├── services/
├── types/
└── App.tsx
```

🛠️ Scripts Disponíveis

npm run dev — Inicia o servidor de desenvolvimento
npm run build — Cria a versão de produção
npm run preview — Visualiza a build localmente

📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
