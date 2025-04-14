# WTWR (What to Wear?): Back End

## Project Overview
This is the back-end component of the WTWR application that helps users decide what to wear based on the weather. The server provides API endpoints for managing clothing items and user preferences, implementing robust data management and social features.

## Technologies Used
- Express.js - Web application framework
- MongoDB - NoSQL database
- Mongoose - ODM (Object Data Modeling) for MongoDB
- Node.js - Runtime environment
- Express Router - Route management
- ESLint - Code quality and style checking
- Prettier - Code formatting
- Validator - Data validation
- Nodemon - Development server with hot reload
- Error Handling Middleware - Custom error handling
- JSON Parser - Request body parsing

## Key Features
- RESTful API Architecture
- User Management System
  - Create new users with customizable profiles
  - Retrieve user information
  - User avatar support
- Clothing Item Management
  - Create new clothing items with weather preferences
  - Delete clothing items
  - View all clothing items in the database
  - Image URL support for clothing items
- Social Interaction Features
  - Like/Unlike clothing items
  - Track item likes by users
  - User-specific item ownership
- Robust Error Handling
  - Validation error handling
  - Document not found handling
  - Bad request handling
  - Server error handling
- Database Integration
  - Mongoose schemas with validation
  - Efficient database queries
  - Relationship management between users and items

## API Endpoints

### Users
- GET `/users` - Get all users
- GET `/users/:userId` - Get user by ID
- POST `/users` - Create new user
  - Required fields: name, avatar

### Clothing Items
- GET `/items` - Get all clothing items
- POST `/items` - Create new clothing item
  - Required fields: name, weather, imageUrl
- DELETE `/items/:itemId` - Delete clothing item
- PUT `/items/:itemId/likes` - Like an item
- DELETE `/items/:itemId/likes` - Unlike an item

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally
- Git for version control

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with required environment variables
4. Start MongoDB service

### Running the Project
- `npm run start` — Launch the server
- `npm run dev` — Launch the server with hot reload feature

## Error Handling
The application implements comprehensive error handling:
- 400: Bad Request - Invalid input or validation errors
- 404: Not Found - Resource not found
- 500: Internal Server Error - Server-side issues

## Database
- MongoDB running on default port (27017)
- Database name: wtwr_db
- Collections: users, clothingitems
