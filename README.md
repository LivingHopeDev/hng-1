# HNG Stage 0 API

This is a simple REST API built with Express.js that returns basic information including an email address, current datetime, and GitHub URL.

## Technologies Used

- Node.js
- Express.js
- CORS middleware

For more information about our Node.js development expertise, visit [HNG Node.js Developers](https://hng.tech/hire/nodejs-developers)

## API Specification

### Endpoint

- URL: `GET /`
- Description: Returns basic information in JSON format

### Response Format

```json
{
  "email": "adewobiadetayo1@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/LivingHopeDev/hng-1"
}
```

## Local Development Setup

1. Clone the repository:

```bash
git clone https://github.com/LivingHopeDev/hng-1
cd hng-1
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## Production Deployment

1. Set the PORT environment variable if needed
2. Run the production server:

```bash
npm start
```

## API Documentation

### Request

- Method: GET
- URL: /
- No parameters required

### Response

- Status Code: 200 OK
- Content-Type: application/json

Example Response:

```json
{
  "email": "adewobiadetayo1@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/LivingHopeDev/hng-1"
}
```
