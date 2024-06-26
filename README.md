## CRUD App for Fasteners

### Description

A CRUD app for parts, a learning exercise to learn more about creating web API's.

Express.js handles the routing and server-side logic. Sequelize ORM is used to interact with a SQLite3 database.
The focus of the project is to learn more about how to build full-stack apps. There is a front-end to demonstrate how the API works.

### Features

-   Create, Read, Update and Delete parts (CRUD)

### Tech Stack

-   Node.js
-   Express
-   Sequelize ORM
-   SQLite3

---

### API Endpoints for Parts

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/parts     | Read all parts |
| GET    | /api/parts/:id | Read one part  |
| POST   | /api/parts     | Create a part  |
| PUT    | /api/parts/:id | Update a part  |
| DELETE | /api/parts/:id | Delete a part  |

---

### API Endpoints for Accounts

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | /api/accounts     | Read all accounts |
| GET    | /api/accounts/:id | Read one account  |
| POST   | /api/accounts     | Create an account |
| PUT    | /api/accounts/:id | Update an account |
| DELETE | /api/accounts/:id | Delete an account |

---

#### Installation

-   git clone `${repo}`
-   Run `npm install`
-   Run `node index.js`
-   Navigate to `${localhost}${port}` in your browser for the front-end app
-   Navigate to `${localhost}${port}/api/parts` in your browser for the API

---

#### Example of API call

`${localhost}/api/parts`

#### Example of API response

```json
[
    {
        "id": 1,
        "partName": "nuts",
        "partType": "hex",
        "quantity": 5,
        "price": 0.09,
        "createdAt": "2023-04-15T11:04:14.575Z",
        "updatedAt": "2023-04-15T11:04:14.575Z"
    },
    {
        "id": 2,
        "partName": "washers",
        "partType": "lock",
        "quantity": 125,
        "price": 0.13,
        "createdAt": "2023-04-15T12:50:02.098Z",
        "updatedAt": "2023-04-15T12:50:02.098Z"
    }
]
```

