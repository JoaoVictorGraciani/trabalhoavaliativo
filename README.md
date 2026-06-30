# 🎬 MovieVerse

<div align="center">

<img src="./src/assets/logo-movieverse.svg" alt="MovieVerse" width="250"/>

### Seu universo de filmes e séries.

Aplicação desenvolvida em **React + Vite**, consumindo a **API do The Movie Database (TMDB)** para exibir informações completas sobre filmes e séries de forma moderna e responsiva.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript)
![TMDB](https://img.shields.io/badge/TMDB-API-01D277?style=for-the-badge)

</div>

---

# 📖 Sobre o Projeto

O **MovieVerse** é uma plataforma web inspirada em serviços de streaming como **Netflix**, **Prime Video** e **Disney+**.

O objetivo deste projeto é demonstrar a construção de uma aplicação moderna utilizando React, explorando conceitos como:

- Consumo de APIs REST
- Componentização
- Context API
- React Router
- Hooks
- Gerenciamento de estado
- Persistência com LocalStorage
- Responsividade
- Animações

Este projeto foi desenvolvido como estudo prático para evolução em desenvolvimento Front-End.

---

# ✨ Funcionalidades

## 🎥 Filmes

- Filmes Populares
- Filmes em Alta
- Lançamentos
- Mais Bem Avaliados
- Pesquisa de Filmes

---

## 📺 Séries

- Séries Populares
- Pesquisa de Séries

---

## 🔍 Busca Inteligente

Permite pesquisar:

- Filmes
- Séries

através da API oficial do TMDB.

---

## ❤️ Favoritos

O usuário pode:

- Adicionar favoritos
- Remover favoritos
- Visualizar sua lista

Os favoritos ficam salvos no navegador utilizando **LocalStorage**.

---

## 👤 Perfil

O sistema permite:

- Alterar nome
- Alterar descrição
- Salvar perfil localmente

---

## 🌙 Tema

Alternância entre:

- Dark Mode
- Light Mode

---

## 🎬 Página de Detalhes

Cada filme ou série possui:

- Poster
- Banner
- Nota
- Gêneros
- Data de lançamento
- Idioma
- Sinopse
- Trailer Oficial
- Elenco
- Filmes semelhantes

---

## 📈 Dashboard

Exibe informações do usuário como:

- Quantidade de favoritos
- Histórico
- Estatísticas

---

## 📱 Responsivo

O projeto funciona em:

- Desktop
- Notebook
- Tablet
- Smartphone

---

# 🛠 Tecnologias Utilizadas

- React
- Vite
- React Router DOM
- Context API
- Framer Motion
- React Icons
- CSS3
- LocalStorage
- TMDB API

---

# 📁 Estrutura do Projeto

```text
src
│
├── assets
│
├── components
│   ├── Cast
│   ├── ContinueWatching
│   ├── Header
│   ├── HeroBanner
│   ├── Loading
│   ├── MovieCard
│   ├── MovieGrid
│   ├── MovieRow
│   ├── Recommendations
│   ├── SearchBar
│   ├── SimilarMovies
│   └── Trailer
│
├── context
│   ├── FavoritesContext
│   ├── ThemeContext
│   └── WatchHistoryContext
│
├── hooks
│
├── layouts
│
├── pages
│
├── routes
│
├── services
│
└── styles
```

---

# 🚀 Como executar o projeto

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/movieverse.git
```

---

## 2️⃣ Entrar na pasta

```bash
cd movieverse
```

---

## 3️⃣ Instalar as dependências

```bash
npm install
```

---

## 4️⃣ Criar o arquivo .env

Na raiz do projeto crie um arquivo chamado:

```text
.env
```

Adicione:

```env
VITE_TMDB_API_KEY=SUA_CHAVE_DA_API
```

---

# 🔑 Como obter a chave da API

1. Acesse:

https://www.themoviedb.org/

2. Crie uma conta.

3. Vá em:

Configurações → API

4. Solicite uma chave gratuita.

5. Copie a chave para o arquivo `.env`.

---

# ▶ Executando

```bash
npm run dev
```

O projeto abrirá em:

```
http://localhost:5173
```

---

# 📦 Gerando Build

```bash
npm run build
```

---

# 🧠 Conceitos estudados

Durante o desenvolvimento foram utilizados conceitos como:

- Componentização
- Props
- Hooks
- useState
- useEffect
- Context API
- React Router
- Consumo de API
- Async/Await
- Fetch API
- LocalStorage
- Responsividade
- Organização de Projeto
- CSS Moderno
- Framer Motion

---

# 📸 Demonstração

Adicione aqui algumas imagens do projeto.

Exemplo:

```
docs/home.png

docs/details.png

docs/dashboard.png
```

---

# 📌 Melhorias futuras

- Login com Firebase
- Autenticação Google
- Recomendações utilizando IA
- Lista personalizada
- Avaliações dos usuários
- Infinite Scroll
- Paginação
- PWA
- Deploy em domínio próprio

---

# 👨‍💻 Autor

**João Graciani**

Projeto desenvolvido para estudos de React, consumo de APIs e desenvolvimento Front-End.

GitHub:

https://github.com/SEU-USUARIO

LinkedIn:

https://linkedin.com/in/SEU-LINK

---

# 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins de estudo e aprendizado.

Os dados utilizados pertencem ao **The Movie Database (TMDB)**.

https://www.themoviedb.org/

---

<div align="center">

⭐ Se este projeto foi útil para você, deixe uma estrela no repositório!

</div>
