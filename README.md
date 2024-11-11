# Library Management System API

## Project Description

A backend API for a Library Management System that enables library staff and members to manage books, memberships, and borrowing activities. This API provides CRUD operations for books, members, and borrow records, with additional endpoints for borrowing and returning books. Each table uses UUID for unique identification.

## Live URL

[Library Management System API](https://library-management-nine-psi.vercel.app)

## Technology Stack & Packages

- **Node.js**: JavaScript runtime for backend development
- **Express.js**: Web framework for building the API
- **TypeScript**: Type safety and developer tooling
- **Prisma ORM**: Object-relational mapper for database interaction
- **PostgreSQL**: Database system
- **Supabase**: Remote PostgreSQL database hosting
- **Vercel**: Deployment platform for serverless functions

## Setup Instructions

To set up and run the project locally, follow these steps:

$1

4.5. **Generate Prisma client**:

```bash
npx prisma generate
```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

6. **Build and run for production**:
   ```bash
   npm run vercel-build
   ```

## Scripts

Add the following scripts to your `package.json`:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "postinstall": "prisma generate",
  "vercel-build": "prisma generate && prisma migrate deploy && tsc",
  "build": "tsc"
}
```

## Key Features & Functionality

### Book Management

- **Create Book**: `POST /api/books`
- **Get All Books**: `GET /api/books`
- **Get Book by ID**: `GET /api/books/:bookId`
- **Update Book**: `PUT /api/books/:bookId`
- **Delete Book**: `DELETE /api/books/:bookId`

### Member Management

- **Create Member**: `POST /api/members`
- **Get All Members**: `GET /api/members`
- **Get Member by ID**: `GET /api/members/:memberId`
- **Update Member**: `PUT /api/members/:memberId`
- **Delete Member**: `DELETE /api/members/:memberId`

### Borrow & Return Books

- **Borrow a Book**: `POST /api/borrow`
- **Return a Book**: `POST /api/return`

### Overdue Borrow List

- **List Overdue Books**: `GET /api/borrow/overdue`

## Error Handling

All errors return a response with the following structure:

```json
{
  "success": false,
  "status": <HTTP_STATUS_CODE>,
  "message": "<Error message>"
}
```

## Known Issues/Bugs

None reported as of this release. Please report any issues via GitHub.

## API Endpoints and Examples

### Create Book

**Request**:

```plaintext
POST /api/books
{
  "title": "To Kill a Mockingbird",
  "genre": "Fiction",
  "publishedYear": 1960,
  "totalCopies": 10,
  "availableCopies": 10
}
```

**Response**:

```json
{
  "success": true,
  "status": 201,
  "message": "Book created successfully",
  "data": {
    "bookId": "uuid",
    "title": "To Kill a Mockingbird",
    "genre": "Fiction",
    "publishedYear": 1960,
    "totalCopies": 10,
    "availableCopies": 10
  }
}
```

### List Overdue Books

**Request**:

```plaintext
GET /api/borrow/overdue
```

**Response (Overdue Books Exist)**:

```json
{
  "success": true,
  "status": 200,
  "message": "Overdue borrow list fetched",
  "data": [
    {
      "borrowId": "uuid",
      "bookTitle": "To Kill a Mockingbird",
      "borrowerName": "John Doe",
      "overdueDays": 5
    }
  ]
}
```

**Response (No Overdue Books)**:

```json
{
  "success": true,
  "status": 200,
  "message": "No overdue books",
  "data": []
}
```
