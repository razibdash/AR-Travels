# Backend API Documentation

# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Method: POST

### Description

This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: The user's first name (required, minimum 3 characters).
  - `lastname`: The user's last name (optional, minimum 3 characters).
- `email`: The user's email address (required, must be a valid email).
- `password`: The user's password (required, minimum 6 characters).

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

Body: A JSON object containing the user details and a JWT token.
Example:

```json
{
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Client Error (400)

Description: Bad request. This can occur if any required fields are missing or invalid, or if the email already exists.

Body: A JSON object containing the error message.
example:

```json
{
  "error": "Email already exists"
}
```

### Validation

The following validations are applied to the request body:

<ul>
  <li>email: Must not be empty and must be a valid email.</li>
  <li>fullname.firstname: Must be at least 3 characters long.</li>
  <li>password: Must be at least 6 characters long.</li>
</ul>

# User Login Endpoint Documentation

## Endpoint: `/users/login`

### Method: POST

### Description

This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body

The request body should be a JSON object with the following fields:

<ul>
 <li>email: The user's email address (required, must be a valid email).</li>
 <li>password: The user's password (required, minimum 6 characters).</li>
</ul>
 Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

Body: A JSON object containing the user details and a JWT token. Example:

```json
{
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

# User Profile Endpoint Documentation

## Endpoint: `/users/profile`

### Method: GET

### Description

This endpoint is used to fetch the profile of the logged-in user. It requires the user to be authenticated.

### Responses

Body: A JSON object containing the user details. Example:

```json
{
  "success": true,
  "message": "User profile fetched successfully",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

# User Logout Endpoint Documentation

## Endpoint: `/users/logout`

### Method: GET

### Description

This endpoint is used to log out the user. It requires the user to be authenticated.

### Responses

Body: A JSON object containing a success message. Example:

```json
{
  "message": "User logged out successfully"
}
```

# Captain Registration Endpoint Documentation

## Endpoint: `/captains/register`

### Method: POST

### Description

This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

### Request Body

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: The captain's first name (required, minimum 3 characters).
  - `lastname`: The captain's last name (optional).
- `email`: The captain's email address (required, must be a valid email).
- `password`: The captain's password (required, minimum 6 characters).
- `vehicle`: An object containing:
  - `color`: The vehicle's color (required, minimum 3 characters).
  - `plate`: The vehicle's plate number (required, minimum 3 characters).
  - `capacity`: The vehicle's capacity (required, must be a valid number).
  - `vehicleType`: The type of vehicle (required, must be one of `car`, `motorcycle`, or `auto`).

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Responses

### Success (201)

<ul>
 <li>Description: Captain registered successfully.</li>
 <li>Body: A JSON object containing the captain details.</li>
</ul>

### Example:

```json
{
  "success": true,
  "message": "Captain created successfully",
  "captain": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

# Captain Login Endpoint Documentation

## Endpoint: `/captains/login`

### Method: POST

### Description

This endpoint is used to log in an existing captain. It requires the captain's email and password.

### Request Body

The request body should be a JSON object with the following fields:

- `email`: The captain's email address (required, must be a valid email).
- `password`: The captain's password (required, minimum 6 characters).

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success (200)

<ul>
<li>Description: Captain logged in successfully.</li>
<li>Body: A JSON object containing the captain details and a JWT token.</li>
</ul>

### Example:

```json
{
  "success": true,
  "message": "Captain logged in successfully",
  "captain": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
