# Gadget_API

Gadget_API is a RESTful API for managing gadgets, with features like user authentication and CRUD operations.

## Features
- User authentication (JWT)
- Gadget management (CRUD)
- Local SQLite database

## Installation
1. Clone the repo: `git clone https://github.com/siddharthbaleja/Gadget_API.git`
2. Install dependencies: `npm install`
3. Configure the `.env` file:
    ```plaintext
    DB_PATH=./imf_gadgets.sqlite
    PORT=3000
    JWT_SECRET=your_jwt_secret
    ```
4. Start the app: `npm start`

## Technologies
- Node.js, Express.js
- JWT, SQLite
- dotenv

## License
MIT License
