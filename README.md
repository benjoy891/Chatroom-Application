# DJChat

A full-stack, interest-based chat application. Users register, join servers built around shared interests, and talk to each other in real time. The backend handles accounts and chat logic, while a modern React frontend provides the UI and live messaging.

## Features

- User accounts: registration, login and logout
- Interest-based servers and channels
- Join and leave servers
- Real-time messaging over WebSockets
- Media support for user-uploaded files and images
- Separate backend and frontend, connected through a REST API

## Tech Stack

**Backend (`djchat/`)**

- Python, Django
- Django REST Framework
- Django Channels with ASGI / Uvicorn for real-time communication

**Frontend (`reactchat/`)**

- React with TypeScript
- Vite
- Material UI (MUI)
- React Router
- Formik
- Axios
- react-use-websocket

## Project Structure

```
.
├── djchat/            # Django backend
│   ├── account/       # Authentication and user accounts
│   ├── server/        # Servers, categories and channels
│   ├── webchat/       # Chat logic and WebSocket consumers
│   ├── media/         # User-uploaded files and images
│   └── requirements.txt
├── reactchat/         # React + TypeScript frontend
│   ├── src/
│   └── package.json
├── commands.md        # Handy commands for development
└── README.md
```

## Getting Started

### Prerequisites

- Python 3.10 or newer
- Node.js 18 or newer and npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/benjoy891/Chatroom-Application.git
cd Chatroom-Application
```

### 2. Start the backend

```bash
cd djchat
python -m venv venv

# Windows (PowerShell)
venv\Scripts\Activate.ps1
# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
```

Run the development server:

```bash
python manage.py runserver
```

Or run it with Uvicorn (ASGI, required for WebSockets):

```bash
uvicorn djchat.asgi:application --reload
```

The backend runs at `http://127.0.0.1:8000` by default.

### 3. Start the frontend

In a second terminal:

```bash
cd reactchat
npm install
npm run dev
```

The frontend runs at `http://127.0.0.1:5173`.

## Usage

1. Open `http://127.0.0.1:5173/register` and create an account.
2. Sign in at `http://127.0.0.1:5173/login`.
3. Browse the available servers and open one.
4. Join a server and start chatting in its channels.

Servers, categories and channels can be created and managed through the Django admin at `http://127.0.0.1:8000/admin`.

## Configuration

Keep secrets out of version control. Settings such as the Django `SECRET_KEY`, database credentials and allowed hosts belong in a local `.env` file or in environment variables, and `.env` must be listed in `.gitignore`.

## Roadmap Ideas

- Message editing and deletion
- Typing indicators and online status
- File and image sharing in channels
- Automated tests and CI
- Docker setup for one-command startup
