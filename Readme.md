# HNG 13 Backend Task 0

A RESTful API endpoint that returns profile information along with dynamic cat facts from Cat Fact API.

## Features

- GET `/me` endpoint with profile data
- Dynamic cat facts from Cat Facts API
- Proper error handling and fallback mechanisms
- CORS enabled
- Security headers with Helmet
- Basic logging

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Afolabi8120/hng13-backend-task0.git
cd hng13-backend-task0
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

Create a `.env` file in the root directory and add your configuration:

```env
PORT = '5000'
USER_EMAIL = 'your email address'
USER_NAME = 'your names'
USER_STACK = 'your stack'
```

4. Run the application:

```bash
npm start
```

---

## Usage

### Accessing the end point

Send a GET request to `http://localhost:5000/me` 

| Method | Endpoint           | Description                       |
|---------|---------------------|-----------------------------------|
| GET     | `/me`      | This will display your details and a random cat fact. Note that your details is been fetched from the .env file   |
