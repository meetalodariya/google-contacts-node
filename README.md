# Google-Contacts-API

## Getting Started

Following instructions will help you to set up this project on your local
machine.

## Installation

first run this command to install all required node modules :

```sh
$ npm install
```

# Usage

run this command to start the development server:

```sh
$ npm run dev
```

Now, compile TypeScript files by following command

```sh
$ tsc
```

# Running the tests

for running the tests use following command:

```sh
$ npm test
```

# Modules Used

**passportJS** : To authenticate the OAuth Client

**passport-google-oauth20**: Google Strategy used to retrieve token.

**googleapis**: to fetch contact details

# Criteria

**Securing backend**: Routes(except oauth callback and login) are secured with middleware to authenticate the bearer token before calling controllers.

**Write Test Cases**: Unit tests are written and kept in same directory as the file(to be tested).

**Dockerize the application**: It is dockerized and deployed on heroku.
