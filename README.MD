# Insurance Policies and Clients Management API

This is a Node.js application that manages information regarding insurance policies and company clients. It provides a Web API for accessing and filtering data related to policies and clients.

## Setup

To set up the application, follow these steps:

1. Clone the repository: `git clone https://github.com/thisisjacopo/node-insure.git`
2. Install dependencies: `npm install`
3. Start the application: `node app.js`

The application will start and listen on the specified port (e.g., 3000).

## Dependencies

The application depends on the following packages:

- axios: For making HTTP requests.
- express: For creating the API server.
- jest: For running tests.

These dependencies are defined in the `package.json` file and will be installed automatically when running `npm install`.

## License

This project is licensed under the [MIT License](LICENSE).

## API Endpoints

The following endpoints are available:

- `GET /clients/:id`: Get user data filtered by user ID.
- `GET /clients/:name`: Get user data filtered by user name.
- `GET /policies/:name`: Get the list of policies linked to a user name.
- `GET /clients/:policyNumber`: Get the user linked to a policy number.

### Example Usage

To get user data filtered by user ID: 

`GET /clients/1234`


To get user data filtered by user name:

`GET  /clients/JohnDoe`


To get the list of policies linked to a user name:


`GET  /clients/:name/policies"`


## Folder Structure


The `routes` folder contains the route handlers for each endpoint and the shared functions to get the needed data from the moki.io endpoints. The `tests` folder contains a very simple test for the first shared function in the `/routes/shared.js` script. The `app.js` file is the entry point of the application.

## Testing

The application includes Jest tests for each route handler. The tests can be found in the `tests` folder. To run the tests, use the following command:

npm test
