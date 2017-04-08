[![Build Status](https://travis-ci.org/wsromek/react-first-app.svg?branch=master)](https://travis-ci.org/wsromek/react-first-app)

# My first React application

This repository has been created as an aid in the process of learning React.js and its development stack.

It is also meant to embrace good practices such as automatization, analysis of code quality, CI etc.

# Integration and deployment

This repository has been prepared to utilize Travis CI to deploy code to Heroku app.

# Basic Commands

* `npm test` - run tests 
* `npm run dev` - runs webpack development mode with watch flag
* `npm run build` - builds application
* `npm run lint` - run es-lint
* `npm run quality` - run tests and es-lint


# TODO
 * ~~implement todo app logic~~
    + ~~provide mechanism to mark items as done~~
    + ~~provide mechanism to remove items~~
    + allow adding todo location (GMapsw with component)
    + ~~provide jest tests for Todo app components~~
   
 * ~~include enzyme unit tests~~
 * include SCSS and use webpack to bundle it
 * provide a backend to serve todo data
 * research react app architectures
 * research server side rendering
