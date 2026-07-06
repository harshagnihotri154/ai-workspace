# 🚀 AI Workspace

> A production-ready AI Workspace built with TypeScript, React, Node.js, MongoDB, and Google Gemini.

AI Workspace is a full-stack AI platform designed with scalable software architecture in mind. It provides real-time AI conversations, persistent chat history, multiple AI provider support, and is being built to support Retrieval-Augmented Generation (RAG), tool calling, memory, authentication, and much more.

---

## ✨ Features

### ✅ Current

- ⚡ Real-time AI response streaming
- 🤖 Google Gemini integration
- 🧩 AI Provider Pattern
- 📦 Repository Pattern
- 🏗 Clean Architecture
- 💬 Persistent chat storage
- 📝 Markdown rendering
- 🎨 Modern React UI
- 📂 MongoDB integration
- 📜 Conversation history
- ⚙️ TypeScript throughout the project

---

## 🚧 Coming Soon

- 🔐 Authentication (JWT)
- 📂 Chat Sidebar
- 🗂 Multiple Conversations
- 📄 Document Upload
- 🧠 RAG (Retrieval Augmented Generation)
- 🧰 Tool Calling
- 🖼 Image Generation
- 🎙 Voice Conversations
- 🤖 Multi-Model Support (Gemini, OpenAI, Claude)
- 🧠 Long-Term Memory
- 📊 Usage Analytics
- 🌙 Themes & Customization

---

# 🏛 Architecture

```
Frontend (React)

        │

        ▼

Controllers

        │

        ▼

Services

   ┌───────────────┐
   ▼               ▼

Repositories     AI Providers

   ▼               ▼

MongoDB        Gemini / OpenAI

```

The project follows a layered architecture to keep business logic independent from databases and AI providers.

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Markdown
- Remark GFM

## Backend

- Node.js
- Express
- TypeScript
- Google Gemini API
- MongoDB
- Mongoose

## Architecture

- Repository Pattern
- Provider Pattern
- Layered Architecture
- Streaming Responses

---

# 📁 Project Structure

```
apps
├── web
└── server

server
├── config
├── controllers
├── database
├── middleware
├── models
├── providers
├── repositories
├── routes
├── services
├── utils

web
├── components
├── pages
├── services
├── types
└── layouts
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/your-username/ai-workspace.git

cd ai-workspace
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file inside `apps/server`.

```env
PORT=4000

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

---

## Run Development Server

```bash
npm run dev
```

---

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:4000
```

---

# 📌 Current Progress

## ✅ Completed

- Streaming AI responses
- Gemini Provider
- AI Provider Pattern
- Repository Pattern
- MongoDB Integration
- Persistent Conversations
- Conversation History
- Markdown Rendering
- TypeScript Backend

---

## 🚧 In Progress

- Chat Sidebar
- Conversation Switching

---

## 📅 Roadmap

### Phase 1

- ✅ Streaming Chat
- ✅ Persistent Storage

### Phase 2

- Sidebar
- Chat History
- Authentication

### Phase 3

- RAG
- File Upload
- Memory

### Phase 4

- Tool Calling
- Multi AI Models
- Image Generation
- Voice Assistant

### Phase 5

- Production Deployment
- Monitoring
- Docker
- CI/CD

---

# 🎯 Design Goals

AI Workspace is being built with production software engineering principles:

- Separation of Concerns
- Scalable Architecture
- Clean Code
- Reusable Components
- Strong Type Safety
- Easy Provider Switching
- Extensible AI System

---

# 📸 Screenshots

> Screenshots will be added as the project evolves.

---

# 🤝 Contributing

Contributions, ideas, and feedback are always welcome.

Fork the repository, create a feature branch, and submit a pull request.

---

# 📄 License

MIT License.

---

## 👨‍💻 Author

**Harsh Agnihotri**

Building AI Workspace as a production-ready AI platform while documenting the engineering journey from architecture to deployment.