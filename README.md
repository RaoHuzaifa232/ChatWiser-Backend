# ChatWiser Backend

ChatWiser is a real-time chat application backend built with [NestJS](https://nestjs.com/), a progressive Node.js framework for building efficient and scalable server-side applications. This backend provides APIs and WebSocket gateways to support chat functionalities such as user authentication, messaging, and chat room management.

## Features

- User registration and authentication
- Real-time messaging with WebSocket support
- Chat room creation and management
- User presence and status tracking
- RESTful APIs for user and chat management
- Modular and scalable architecture using NestJS

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm (comes with Node.js)
- A database (e.g., PostgreSQL, MongoDB) configured as per your environment (if applicable)

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd ChatWiser-Backend
npm install
```

### Configuration

Configure environment variables as needed. You can create a `.env` file in the root directory to set variables such as database connection strings, JWT secrets, and other configuration options.

### Running the Application

To start the backend server in development mode with hot-reloading:

```bash
npm run start:dev
```

To start the server in production mode:

```bash
npm run start:prod
```

### Running Tests

Run unit tests:

```bash
npm run test
```

Run end-to-end (e2e) tests:

```bash
npm run test:e2e
```

Generate test coverage report:

```bash
npm run test:cov
```

## Deployment

When deploying ChatWiser backend to production, ensure environment variables are properly set and the database is accessible. You can deploy to any Node.js compatible hosting platform or cloud provider.

## Resources

- [NestJS Documentation](https://docs.nestjs.com) - Learn more about the framework used.
- [ChatWiser Frontend Repository](#) - Link to the frontend application (if available).
- [WebSocket Protocol](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) - For understanding real-time communication.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## Authers
Rao Huzaifa
Shahroz Amir

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the project maintainer.
