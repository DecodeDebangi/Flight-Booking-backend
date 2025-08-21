# Base Node.js Project Template

A comprehensive Node.js project template designed with industry best practices and clean architecture principles. This template provides a solid foundation for building scalable, maintainable Node.js applications.

## 🚀 Features

- **Clean Architecture**: Well-organized folder structure following separation of concerns
- **Configuration Management**: Centralized configuration handling with environment variables
- **Logging**: Structured logging with Winston
- **Middleware Support**: Built-in middleware architecture for request processing
- **Database Integration**: Repository pattern for database operations
- **Error Handling**: Comprehensive error handling utilities

## 📁 Project Structure

```
src/
├── config/          # Configuration files and setup
├── controllers/     # Request handlers and response formatting
├── middlewares/     # Request interceptors and validators
├── repositories/    # Database interaction layer
├── routes/          # API route definitions
├── services/        # Business logic layer
└── utils/           # Helper functions and utilities
```

## 🏗️ Architecture Overview

### `config/`

Contains all configuration files and library setups. This includes:

- **server-config.js**: Server configuration, environment variables setup with dotenv
- **logger-config.js**: Winston logging configuration for structured logging
- **index.js**: Centralized configuration exports

### `routes/`

Defines API endpoints and associates them with appropriate middleware and controllers. Routes are organized by version (e.g., `v1/`) for better API versioning.

### `middlewares/`

Request interceptors that process incoming requests before they reach controllers. Common use cases include:

- Authentication and authorization
- Request validation
- Rate limiting
- CORS handling
- Request logging

### `controllers/`

The final middleware layer that handles HTTP requests and responses. Controllers:

- Receive incoming requests and data
- Delegate business logic to services
- Format and structure API responses
- Handle error responses

### `repositories/`

Database interaction layer that contains all database queries and operations. This layer:

- Abstracts database operations from business logic
- Supports both raw SQL queries and ORM operations
- Provides a clean interface for data access

### `services/`

Business logic layer that implements application-specific functionality. Services:

- Contain core business rules and logic
- Interact with repositories for data operations
- Handle complex business operations
- Maintain separation between business logic and data access

### `utils/`

Helper functions, utility classes, and common functionality including:

- Custom error classes
- Helper methods
- Utility functions
- Constants and enums

## 🛠️ Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Base_Node_JS_Project_Template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Database Configuration**

   **Step 1: Initialize Sequelize**

   Go inside the `src` folder and execute the following command:

   ```bash
   npx sequelize init
   ```

   By executing this command, you will get:

   - `migrations` folder
   - `seeders` folder
   - `config.json` file inside the `config` folder

   **Step 2: Configure Database Connection**

   The `config.json` file will be automatically created. Update it with your database configuration:

   ```json
   {
     "development": {
       "username": "root",
       "password": "<your-password>",
       "database": "database_development",
       "host": "127.0.0.1",
       "dialect": "mysql"
     },
     "test": {
       "username": "root",
       "password": null,
       "database": "database_test",
       "host": "127.0.0.1",
       "dialect": "mysql"
     },
     "production": {
       "username": "root",
       "password": null,
       "database": "database_production",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```

   **Important Notes:**

   - If you are setting up your **development environment**, write the username and password of your database and mention the database type in the `dialect` field (e.g., `mysql`, `mariadb`, `postgres`, etc.)
   - If you are setting up **test or production environment**, make sure to also replace the `host` with your hosted database URL

5. **Start the server**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

## 📝 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
```

## 🔧 Available Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with nodemon
- `npm test`: Run tests
- `npm run lint`: Run ESLint

## 📚 Best Practices

This template follows several key principles:

- **Separation of Concerns**: Each layer has a specific responsibility
- **Dependency Injection**: Loose coupling between components
- **Error Handling**: Comprehensive error handling at all layers
- **Logging**: Structured logging for better debugging and monitoring
- **Configuration Management**: Centralized configuration with environment variables
- **Code Organization**: Clear folder structure for maintainability

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the existing issues
2. Create a new issue with detailed information
3. Contact the maintainers

---

**Happy Coding! 🎉**
