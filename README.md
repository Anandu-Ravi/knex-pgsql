
# Knex.js + PostgreSQL + Express  

This project demonstrates how to connect to a **PostgreSQL** database using **Knex.js** and **Express** in a Node.js environment. It covers database migrations, rollbacks, and schema evolution.  

## Setup  

1. **Install dependencies**  
   ```sh
   npm install
   ```  

2. **Configure environment variables** (Create a `.env` file and add your database credentials)  

3. **Run the development server**  
   ```sh
   npm run dev
   ```  

## Database Management  

- **Run migrations**  
  ```sh
  npm run migrate
  ```  

- **Rollback migrations**  
  ```sh
  npm run rollback
  ```  

- **Create a new migration**  
  ```sh
  npm run make-migration migration_name
  ```  

## Tech Stack  
- **Node.js**  
- **Express.js**  
- **Knex.js** (Query Builder)  
- **PostgreSQL**  

---
