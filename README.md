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

# Todos
  - Add in your models in the server/models/ folder
    - Follow examples in folder for help
  - Add in routes in your server/server.js file
    - Follow examples in the file for help
  - Modify package.json to inclue db of your choice
  - Add in database names to the config/config.json file
  - Build front end using framework of your choice

# Development
  - Start database server
  - nodemon server.js