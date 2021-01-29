# Livestack

# About the Application

This repository contains two separate applications: `client`, which is a Create React App (deployed with Netlify) for the frontend, and `server`, a Node API (deployed on Heroku) for the backend.

In order to make _authenticated_ requests to the backend, a header called "authorization" must be sent to the server with a valid JWT. In development, the secret key is the string "secret”, so you can create your own token at JWT.io for testing purposes.

# Getting Started on the Server

1. clone the repository
2. `cd server`
3. `npm install`
4. `createdb livestack`
5. `createdb livestack-test`
6. Create an `.env` file in the root of the `server` directory. The `.env` file should contain different variables. You can get these variables and their values from a developer on the team. **DO NOT MOVE ON UNTIL YOU HAVE GOTTEN THESE VARIABLES, YOU CANNOT RUN THIS APPLICATION WITHOUT THEM**. Below are some examples of what these variables should look like.

```
Examples:

ZOOM_REDIRECT_URL=http://localhost:3001/zoom/oauth
DAILY_API_KEY=3141592653abcdefg
...
```

7. `npm run migrate up`
8. `npm run migrate-testing`
9. `brew install redis`
10. `brew services start redis`

## Server :: Webhooks

This application uses Stripe to take payment from users.

In order to test payment functionality locally, you must have the `stripe-cli` installed. Follow the setup instructions found at https://stripe.com/docs/stripe-cli.

Once installed and logged in with Stripe, in a separate tab in the Terminal, run the following command:

`stripe listen --forward-to localhost:3000/payments/webhook`

Alternatively, you can also do this by running:

`npm run stripe-hook`

Note: **this tab must remain open and running**, as it will serve the Webhook functions locally.

Once you run this, you will receive a signing secret that starts with `whsec_`, followed by quite a few characters.

Add this string to your `server` .env file as `STRIPE_WEBHOOK_SECRET=YOUR_SIGNING_KEY`.

Payments will not work locally if you don't have the Stripe Webhook running.

# Getting Started on the Client

The client is a React application that is deployed to production using netlify.

To run the client:

1. `cd client`
2. `npm install`

Create an `.env` file in the root of the `client` directory. The `.env` file should contain different variables. You can get these variables and their values from a developer on the team. **DO NOT MOVE ON UNTIL YOU HAVE GOTTEN THESE VARIABLES, YOU CANNOT RUN THIS APPLICATION WITHOUT THEM**. Below are some examples of what these variables should look like.

```
Examples:

PORT=3001
REACT_APP_STRIPE_PUBLIC_KEY="pk_test_IBhQ3nWp8BzuGBozMPTjL4ci00OqxBTJbT"
...
```

# Setting Up Algolia and Running the Server and Client

Algolia is used for instant search and pagination.

1.  You will have to create your own free trial account on Algolia's website. A personal account is needed so that everything in your local database will show in your search bar.

2.  In the Algolia dashboard, select `Indices` and create two indices. The names of each index will be included in both the server and client `.env` files.

3.  Create an index for events with the name of `dev_EVENTS_INDEX` and one index for creators with the name of `dev_CREATORS_INDEX`. When creating a new index, you can ignore the task list provided for now.

4.  Save these names along with the Application ID and API Key (found in `API Keys`) in both the server and client `.env` files.

- For the server `.env` file, save the `Application ID` and `Admin API Key` to `ALGOLIA_APP_ID` and `ALGOLIA_API_KEY` respectively.
- For the client `.env` file, save the `Application ID` and `Search-Only API Key` to `REACT_APP_ALGOLIA_APP_ID` and `REACT_APP_ALGOLIA_API_KEY` respectively.

5.  To configure your search to make sure that the events are pulled by date, go to the events index, configuration, Ranking and Sorting and add a custom ranking for `date_time`.

Once Algolia is set up:

In the root `server` directory:

1. Seed the database with `node seed.js`
2. `npm test` to run the tests
3. `npm start` to start the server

If you need to reset database for livestack and livestack-test: - `npm run db-reset` - If you reset your database, make sure to also clear your indices in Algolia as they will not be cleared/reset along with your database. To do so, go into the index on Algolia and select the dropdown menu of `Manage index` and select `Clear`.

In the root `client` directory:

1. `npm start` to start the client

A test account you can use to login in is:

- test@test.com
- testpassword

This account was created when you ran the seed file.

# Deployment

In order to deploy, you must be a designated collaborator on the project in Heroku. If you are not a collaborator, please ask a team member with permissions to add you.

### Deployment :: Staging

The staging API app is live on Heroku at:
https://live-stack-api-staging.herokuapp.com

Run `git remote -v` and make sure that you have `staging` set to the appropriate repositories:

```
staging	https://git.heroku.com/live-stack-api-staging.git (fetch)
staging	https://git.heroku.com/live-stack-api-staging.git (push)
```

If you do not see the above, add `staging` by running the following command:

```
git remote add staging https://git.heroku.com/live-stack-api-staging.git
```

#### Deploying `staging` (Staging) to Heroku

Once on the `staging` branch, make sure that you have the latest code.

From the `server` directory, run the following command:

```
npm run deploy-staging
```

### Deployment :: Production

The production API app is live on Heroku at:
https://live-stack-api.herokuapp.com/

Run `git remote -v` and make sure that you have `production` set to the appropriate repositories:

```
production	https://git.heroku.com/live-stack-api.git (fetch)
production	https://git.heroku.com/live-stack-api.git (push)
```

If you do not see the above, add `production` by running the following command:

```
git remote add production https://git.heroku.com/live-stack-api.git
```

#### Deploying `master` (Production) to Heroku

From the `server` directory, run the following command:

```
npm run deploy-production
```

## Running Deployed Migrations

If the deployed code contains new migrations, you must also run these migrations in the destination environment.

To run migrations for deployed changes in `staging`, from the `server` directory, run the following command:

```
npm run migrate-staging
```

To run migrations for deployed changes in `production`, from the `server` directory, run the following command:

```
npm run migrate-production
```

You should see a confirmation message of ‘Migrations complete!’, if successful.

# A Note on Environments

#### Staging

When code is pushed to `staging`, the branch is automatically deployed to https://staging.livestack.video.

Stripe payments will run in test mode.

#### Production

When code is pushed to `master`, the branch is automatically deployed to https://livestack.video.

Stripe will **not** run in test mode, so charges made will be real transactions. There is a separate database for production, so users created locally or in `staging` will not be available.