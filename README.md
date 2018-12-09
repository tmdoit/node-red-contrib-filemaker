# node-red-contrib-filemaker

A Node-RED FileMaker module. These nodes use [fms-api-client](https://github.com/Luidog/fms-api-client) to connect to the FileMaker Data API. These node expose fms-api-client's client methods and data transformation utility methods. Each node depends upon a configurable FileMaker Data API [client](https://github.com/Luidog/fms-api-client#client-creation). 

## Project Information

[![npm version](https://img.shields.io/npm/v/node-red-contrib-filemaker.svg)](https://www.npmjs.com/package/node-red-contrib-filemaker) [![Build Status](https://img.shields.io/travis/Luidog/node-red-contrib-filemaker/master.svg)](https://travis-ci.com/Luidog/node-red-contrib-filemaker.svg?branch=master) [![Coverage Status](https://img.shields.io/coveralls/Luidog/node-red-contrib-filemaker/master.svg)](https://coveralls.io/r/Luidog/node-red-contrib-filemaker?branch=master)

[FMS API Client Documentation](https://luidog.github.io/fms-api-client/)

## License

MIT © Lui de la Parra

## Installation

```sh
npm install --save node-red-contrib-filemaker
```


```default
> node-red-contrib-filemaker@0.8.0 test /Users/luidelaparra/Documents/Development/node-red-contrib-filemaker
> nyc _mocha --recursive  "test/**/*_spec.js" --timeout=30000 --exit



  Client Node
    ✓ should be loaded

  Create Record Node
    ✓ should be loaded
    ✓ should create a record (303ms)
    ✓ should throw an error with a message and a code (180ms)

  Delete Record Node
    ✓ should be loaded
    ✓ should delete a record (258ms)
    ✓ should throw an error with a message and a code (176ms)

  Edit Record Node
    ✓ should be loaded
    ✓ should edit a record (173ms)
    ✓ should throw an error with a message and a code (183ms)

  FieldData Utility Node
    ✓ should be loaded
    ✓ should transform an array of data
    ✓ should transform a single data object
    ✓ should preserve the contents of other payload properties

  Find Records Node
    ✓ should be loaded
    ✓ should perform a find (220ms)
    ✓ should throw an error with a message and a code (185ms)

  Get Record Node
    ✓ should be loaded
    ✓ should get a specific record (172ms)
    ✓ should throw an error with a message and a code (177ms)

  Set Globals Node
    ✓ should be loaded
    ✓ should set globals (170ms)
    ✓ should throw an error with a message and a code (175ms)

  List Records Node
    ✓ should be loaded
    ✓ should List records (248ms)
    ✓ should throw an error with a message and a code (178ms)

  Login Node
    ✓ should be loaded
    ✓ should login to a Data API session (95ms)
    ✓ should throw an error with a message and a code (1430ms)

  Logout Node
    ✓ should be loaded
    ✓ should close a Data API Session (177ms)
    ✓ should throw an error with a message and a code

  Record Id Utility Node
    ✓ should be loaded
    ✓ should extract one record id from an array of data
    ✓ should extract one record id from a data object
    ✓ should extract many record ids from a data array
    ✓ should preserve the contents of other payload properties

  Trigger Script Node
    ✓ should be loaded
    ✓ should trigger a script (182ms)
    ✓ should throw an error with a message and a code (166ms)

  Utility Services
    merge utility
      ✓ should merge data to the payload object
    compact utility
      ✓ should accept an array of objects
      ✓ should remove null properties
      ✓ should remove null properties
      ✓ should remove empty strings
      ✓ should not remove false values
      ✓ should discard non json values
      ✓ should discard non json values
    isJson Utility
      ✓ it should return true for an object
      ✓ it should return true for an empty object
      ✓ it should return true for a stringified object
      ✓ it should return false for a number
      ✓ it should return false for undefined
      ✓ it should return false for a string
      ✓ it should return false for null

  Transform Utility Node
    ✓ should be loaded
    ✓ should transform an array of data
    ✓ should transform a single data object
    ✓ should preserve the contents of other payload properties

  Upload File Node
    ✓ should be loaded
    ✓ should upload to a record (1472ms)
    ✓ should throw an error with a message and a code


  62 passing (7s)

-----------------------|----------|----------|----------|----------|-------------------|
File                   |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------------|----------|----------|----------|----------|-------------------|
All files              |      100 |      100 |      100 |      100 |                   |
 client                |      100 |      100 |      100 |      100 |                   |
  client.js            |      100 |      100 |      100 |      100 |                   |
 nodes                 |      100 |      100 |      100 |      100 |                   |
  create.js            |      100 |      100 |      100 |      100 |                   |
  delete.js            |      100 |      100 |      100 |      100 |                   |
  edit.js              |      100 |      100 |      100 |      100 |                   |
  fieldData.js         |      100 |      100 |      100 |      100 |                   |
  find.js              |      100 |      100 |      100 |      100 |                   |
  get.js               |      100 |      100 |      100 |      100 |                   |
  globals.js           |      100 |      100 |      100 |      100 |                   |
  list.js              |      100 |      100 |      100 |      100 |                   |
  login.js             |      100 |      100 |      100 |      100 |                   |
  logout.js            |      100 |      100 |      100 |      100 |                   |
  recordId.js          |      100 |      100 |      100 |      100 |                   |
  script.js            |      100 |      100 |      100 |      100 |                   |
  transform.js         |      100 |      100 |      100 |      100 |                   |
  upload.js            |      100 |      100 |      100 |      100 |                   |
 services              |      100 |      100 |      100 |      100 |                   |
  index.js             |      100 |      100 |      100 |      100 |                   |
  utilities.service.js |      100 |      100 |      100 |      100 |                   |
-----------------------|----------|----------|----------|----------|-------------------|
```

## <a name="dependencies">Dependencies</a>

- [fms-api-client](https://github.com/Luidog/fms-api-client): A FileMaker Data API client designed to allow easier interaction with a FileMaker application from a web environment.
- [lodash](https://github.com/lodash/lodash): Lodash modular utilities.
- [marpat](https://github.com/luidog/marpat): A class-based ES6 ODM for Mongo-like databases.

## <a name="dev-dependencies">Dev Dependencies</a>

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [coveralls](https://github.com/nickmerwin/node-coveralls): takes json-cov output into stdin and POSTs to coveralls.io
- [dotenv](https://github.com/motdotla/dotenv): Loads environment variables from .env file
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-google](https://github.com/google/eslint-config-google): ESLint shareable config for the Google style
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): Runs prettier as an eslint rule
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [mocha-lcov-reporter](https://github.com/StevenLooman/mocha-lcov-reporter): LCOV reporter for Mocha
- [mos](https://github.com/mosjs/mos): A pluggable module that injects content into your markdown files via hidden JavaScript snippets
- [mos-plugin-dependencies](https://github.com/mosjs/mos/tree/master/packages/mos-plugin-dependencies): A mos plugin that creates dependencies sections
- [mos-plugin-execute](https://github.com/team-767/mos-plugin-execute): Mos plugin to inline a process output
- [mos-plugin-installation](https://github.com/mosjs/mos/tree/master/packages/mos-plugin-installation): A mos plugin for creating installation section
- [mos-plugin-license](https://github.com/mosjs/mos-plugin-license): A mos plugin for generating a license section
- [node-red](https://github.com/node-red/node-red): A visual tool for wiring the Internet of Things
- [node-red-node-test-helper](https://github.com/node-red/node-red-node-test-helper): A test framework for Node-RED nodes
- [nyc](https://github.com/istanbuljs/nyc): the Istanbul command line interface
- [pm2](https://github.com/Unitech/pm2): Production process manager for Node.JS applications with a built-in load balancer.
- [prettier](https://github.com/prettier/prettier): Prettier is an opinionated code formatter
- [varium](https://npmjs.org/package/varium): A strict parser and validator of environment config variables
