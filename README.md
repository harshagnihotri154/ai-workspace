# 🚀 AI Workspace

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

A full-stack AI platform built with **TypeScript, React, Node.js, MongoDB, and Google Gemini** — designed around a clean, layered architecture that makes it easy to add providers, features, and integrations over time.

AI Workspace delivers real-time AI conversations with persistent chat history today, and is actively being extended to support Retrieval-Augmented Generation (RAG), tool calling, long-term memory, authentication, and more.

---

## Table of Contents

- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Progress & Roadmap](#-progress--roadmap)
- [Design Goals](#-design-goals)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## ✨ Features

### Available Now

| | |
|---|---|
| ⚡ | Real-time AI response streaming |
| 🤖 | Google Gemini integration |
| 🧩 | Provider pattern for pluggable AI backends |
| 📦 | Repository pattern for data access |
| 🏗 | Clean, layered architecture |
| 💬 | Persistent chat storage (MongoDB) |
| 📜 | Full conversation history |
| 📝 | Markdown rendering with GFM support |
| 🎨 | Modern, responsive React UI |
| ⚙️ | End-to-end TypeScript |

### Coming Soon

- 🔐 Authentication (JWT)
- 📂 Chat sidebar with multiple conversations
- 📄 Document upload
- 🧠 Retrieval-Augmented Generation (RAG)
- 🧰 Tool calling
- 🖼 Image generation
- 🎙 Voice conversations
- 🤖 Multi-model support (Gemini, OpenAI, Claude)
- 🧠 Long-term memory
- 📊 Usage analytics
- 🌙 Themes & customization

---

## 🏛 Architecture

AI Workspace follows a layered architecture that keeps business logic independent of any specific database or AI provider — so swapping Gemini for OpenAI, or MongoDB for another store, means changing one layer, not the whole app.

```
                ┌─────────────────┐
                │  Frontend (React) │
                └────────┬─────────┘
                         │
                         ▼
                ┌─────────────────┐
                │    Controllers   │
                └────────┬─────────┘
                         │
                         ▼
                ┌─────────────────┐
                │     Services     │
                └────────┬─────────┘
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
    ┌─────────────────┐    ┌─────────────────┐
    │   Repositories    │    │   AI Providers   │
    └────────┬─────────┘    └────────┬─────────┘
             ▼                       ▼
    ┌─────────────────┐    ┌─────────────────┐
    │     MongoDB       │    │ Gemini / OpenAI  │
    └─────────────────┘    └─────────────────┘
```

**Request flow:** the React frontend calls into controllers, which delegate to services containing the business logic. Services talk to repositories for persistence and to AI providers for model inference — each swappable behind its own interface.

---

## 🛠 Tech Stack

**Frontend**
- React + TypeScript
- Vite
- Tailwind CSS
- React Markdown + Remark GFM

**Backend**
- Node.js + Express
- TypeScript
- Google Gemini API
- MongoDB + Mongoose

**Architecture Patterns**
- Repository pattern
- Provider pattern
- Layered architecture
- Streaming responses

---

## 📁 Project Structure

```
apps/
├── web/                  # React frontend
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── types/
│   └── layouts/
│
└── server/               # Node.js backend
    ├── config/
    ├── controllers/
    ├── database/
    ├── middleware/
    ├── models/
    ├── providers/
    ├── repositories/
    ├── routes/
    ├── services/
    └── utils/
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB instance (local or Atlas)
- A Google Gemini API key

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-workspace.git
cd ai-workspace
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file inside `apps/server`:

```env
PORT=4000
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

### 4. Run the development server

```bash
npm run dev
```

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:4000 |

---

## 📌 Progress & Roadmap

### ✅ Completed

- Streaming AI responses
- Gemini provider integration
- AI provider pattern
- Repository pattern
- MongoDB integration
- Persistent conversations & history
- Markdown rendering
- TypeScript backend

### 🚧 In Progress

- Chat sidebar
- Conversation switching

### 🗺 Roadmap

| Phase | Focus | Status |
|---|---|---|
| 1 | Streaming chat, persistent storage | ✅ Done |
| 2 | Sidebar, chat history, authentication | 🚧 In progress |
| 3 | RAG, file upload, memory | 📅 Planned |
| 4 | Tool calling, multi-model support, image generation, voice assistant | 📅 Planned |
| 5 | Production deployment, monitoring, Docker, CI/CD | 📅 Planned |

---

## 🎯 Design Goals

AI Workspace is built with production-grade engineering principles in mind:

- Separation of concerns
- Scalable, layered architecture
- Clean, readable code
- Reusable components
- Strong type safety throughout
- Easy provider switching (AI models & data stores)
- Extensibility as a first-class concern

---

## 📸 Screenshots

_Screenshots will be added as the UI evolves._

---

## 🤝 Contributing

Contributions, ideas, and feedback are always welcome.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a pull request

---

## 📄 License

Released under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Harsh Agnihotri**

Building AI Workspace as a production-ready AI platform, documenting the engineering journey from architecture to deployment.