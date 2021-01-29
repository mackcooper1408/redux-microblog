# Micro Blog

# About the Application

This is a simple micro blog for creating posts and voting or commenting on them.

This repository contains two separate applications: `frontend`, which is a Create React App (deployed with Netlify), and `backend`, a Node API (deployed on Heroku).

# Getting Started on the Server

1. clone the repository
2. `cd backend`
3. `npm install`
4. `createdb microblog`
5. `psql < data.sql`
6. `npm start`

All routes are prefixed with `/api` so to fetch posts the route is `GET /api/posts`

# Getting Started on the Client

The client is a React application that is deployed to production using netlify.

To run the client:

1. `cd frontend`
2. `npm install`
3. `npm test`

- Launches the test runner in the interactive watch mode.

4. `npm start`

- Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  The page will reload if you make edits.\
  You will also see any lint errors in the console.
