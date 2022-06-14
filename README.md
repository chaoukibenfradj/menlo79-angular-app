# Menlo79-Angular-App
An Angular App for Menlo79.
The app consists of a search engine for books. 
The user have a main screen where he can search for books and he could also check the book details by clicking on the book item on the list.

## Architecture

- [Angular v14](https://angular.io/) For the front-end part.
- [Json Server](https://angular.io/) Fake a REST API.

## Setup Steps
1. Please make sure that you have the latest LTS Node.js version (currently [Node.js 16.15](https://nodejs.org/en/download/)).
2. Clone the repository
3. `cd menlo79-app`
4. `npm install`

## Run the project
1. To run the project you will need to run `json-server` first to serve the REST endpoints for the frontend via `npm run json:server`,
2. Then run in an other terminal window: `npm run start` to start the app. 
3. By default, Angular serves the app on: `http://localhost:4200/`

## Run Unit Test
To run the Unit Test please run: `npm run test`.
The Unit Tests where written using Jasmine and Karma.