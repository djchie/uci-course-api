# Development Setup

Terminal 1
  nodemon server.js

Terminal 2
  psql from the PostgreSql desktop app

# Database Commands

  - Create a new database
  - 'CREATE DATABASE db_name;'

  - Delete a database
  - 'DROP DATABASE db_name;'

  - Show a list of databases
  - '\list or \l'

  - Use a database
  - '\connect db_name or \c db_name'

  - Show a list of tables
  - '\dt'

  - Describe a table
  - '\d+ "db_name"'

# Testing

  - GET http://localhost:8080/products/i/s/s
  - To get all items

  - Use Postman
  - POST http://localhost:8080/product
  - Create new product