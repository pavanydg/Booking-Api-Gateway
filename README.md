This is template of a well structured backend.

`src` -> Contains all the source code except the tests.

inside `src` folder -> 

 - `config` -> Configurations or a setup of a library or any module will be done. Eg:- dotenv, winston for logging

 - `routes` -> Here Routes will be defined along for a particular controller and middleware.

 - `middlewares` -> Intercept the incoming requests where we can write validators, authenticators.

 - `controllers` -> Layer on top of business logic. i.e we just receive the incoming requests and data and then pass it to the business layer and once it returns any output we structure the API response in controllers and send the output.

 - `repositories` -> Logic for interacting with DB by writing queries, raw queries or ORM queries.

 - `services` -> Contains business logic and interacts with repositories for data from the database

 - `utils` -> contains helper methods, error classes.

### Setup the project

 - Download this repo.
 - Install the dependencies.
 ```
    npm install
 ```
 - In root directory add `.env` file and add the following variables.
 ```
    PORT=<port number>
 ```

 - go inside the `src` folder and execute the following command.
 ```
    npx sequelize init
 ```

In `src` folder create a `config.json` file and add the below code.
```
  {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```