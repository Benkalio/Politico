# Politico

## Features for API Routes
#### I have added support for making API calls on the following routes:

- Government offices Route
HTTP request can be made on this endpoint.

- Political Parties Route 
API endpoint for making HTTP request to and from backend and json data.

- User Route 
This endpoint makes HTTP request to users data

### Purpose
- I made this as part of the backend architectural framework. It contains users, government offices, political parties routes, which will be later connected on the UI.

- It routes, test and controllers for Government offices, Political parties, and Users. The data is stored in a JSON data file for easy API calls (Postgres will be eventually used).  

- I'm using Chai and Mocha for testing the routes, and Postman for HTTP request verification. 

### To be added
- I will implement TravisCI for Continuous intergration in the next implementation (possibly in a separate branch).
