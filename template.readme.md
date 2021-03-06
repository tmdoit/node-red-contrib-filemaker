<!--@'# ' + pkg.name-->
# node-red-contrib-filemaker
<!--/@-->

Node Red FileMaker nodes. These nodes use [fms-api-client](https://github.com/Luidog/fms-api-client) to connect to FileMaker Server. Each node exposes an fms-api-client method or utility. Nodes connecting to FileMaker Server depend upon a configurable FileMaker Data API [client](https://github.com/Luidog/fms-api-client#client-creation).

## Project Information

[![npm version](https://badge.fury.io/js/node-red-contrib-filemaker.svg)](https://www.npmjs.com/package/node-red-contrib-filemaker) [![Build Status](https://travis-ci.com/Luidog/node-red-contrib-filemaker.svg?branch=master)](https://travis-ci.com/Luidog/node-red-contrib-filemaker) [![Coverage Status](https://img.shields.io/coveralls/Luidog/node-red-contrib-filemaker/master.svg)](https://coveralls.io/r/Luidog/node-red-contrib-filemaker?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/Luidog/node-red-contrib-filemaker/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Luidog/node-red-contrib-filemaker?targetFile=package.json)

<!--@license()-->
## License

MIT © Lui de la Parra
<!--/@-->

## Installation

These nodes can be installed from the command line by running the following command in your Node Red directory:

```sh
npm install --save node-red-contrib-filemaker
```

These nodes can also be installed using the Node Red palette manager.

<!--@execute('npm run test',[])-->
```default
> node-red-contrib-filemaker@1.0.0 test /node-red-contrib-filemaker
> nyc _mocha --recursive  "test/**/*_spec.js" --timeout=30000 --exit



  Client Node
    ✓ should be loaded

  Container Data Node
    ✓ should be loaded
    ✓ should download an object with container data to a buffer (2602ms)
    ✓ should download an array of objects with container data to a buffer (1591ms)
    ✓ should download an object with container data to the filesystem (1415ms)
    ✓ should download an array of objects with container data to the filesystem (1394ms)
    ✓ should throw an error with a message and a code when writing an object to a buffer and an error is triggered
    ✓ should throw an error with a message and a code when writing an array to a buffer an error is triggered 
    ✓ should handle undefined data input when writing to a buffer
    ✓ should handle undefined data input when writing to a file
    ✓ should throw an error when writing data to the filesystem and an error is triggered
    ✓ should throw an error with a message and a code when writing to a buffer and an array is triggered

  Create Record Node
    ✓ should be loaded
    ✓ should create a record (180ms)
    ✓ should create allow the filemaker response to be merged to the message object (172ms)
    ✓ should use flow context to create a record. (176ms)
    ✓ should use global context to create a record. (178ms)
    ✓ should throw an error with a message and a code (170ms)

  Delete Record Node
    ✓ should be loaded
    ✓ should delete a record (259ms)
    ✓ should throw an error with a message and a code (183ms)

  Edit Record Node
    ✓ should be loaded
    ✓ should edit a record (257ms)
    ✓ should support merging data when editing a record (254ms)
    ✓ should throw an error with a message and a code (168ms)

  FieldData Utility Node
    ✓ should be loaded
    ✓ should transform an array of objects (272ms)
    ✓ should transform a a single object (443ms)
    ✓ should reject with an error message and code

  Find Records Node
    ✓ should be loaded
    ✓ should perform a find (268ms)
    ✓ should throw an error with a message and a code (170ms)

  Get Record Node
    ✓ should be loaded
    ✓ should get a specific record (261ms)
    ✓ should throw an error with a message and a code (168ms)

  Set Globals Node
    ✓ should be loaded
    ✓ should set globals (171ms)
    ✓ should throw an error with a message and a code (165ms)

  List Records Node
    ✓ should be loaded
    ✓ should List records (259ms)
    ✓ should throw an error with a message and a code (172ms)

  Login Node
    ✓ should be loaded
    ✓ should login to a Data API session (91ms)
    ✓ should throw an error with a message and a code (1659ms)

  Logout Node
    ✓ should be loaded
    ✓ should close a Data API Session (213ms)
    ✓ should throw an error with a message and a code

  Record Id Utility Node
    ✓ should be loaded
    ✓ should extract record ids from a single object (253ms)
    ✓ should extract record ids from an array of objects (257ms)
    ✓ should reject with an error message and a code

  Trigger Script Node
    ✓ should be loaded
    ✓ should trigger a script (170ms)
    ✓ should parse a script result if it is valid json (173ms)
    ✓ should not parse a script result if it is not valid json (181ms)
    ✓ should throw an error with a message and a code (166ms)

  Utility Services
    merge utility
      ✓ should merge data to the payload object
    sanitize utility
      ✓ should discard unspecified properties
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
    castBoolean Utility
      ✓ it should cast a true string as true boolean
      ✓ it should cast a false string as false boolean
      ✓ it should cast multiple string values as booleans
      ✓ it should only cast strings of true or false

  Transform Utility Node
    ✓ should be loaded
    ✓ should transform an array of objects (263ms)
    ✓ should transform a single object (262ms)
    ✓ should throw an error with a message and a code

  Upload File Node
    ✓ should be loaded
    ✓ should upload to an existing record (337ms)
    ✓ should upload to a file to a new record (357ms)
    ✓ should throw an error with a message and a code


  84 passing (16s)

-----------------------|----------|----------|----------|----------|-------------------|
File                   |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------------|----------|----------|----------|----------|-------------------|
All files              |      100 |      100 |      100 |      100 |                   |
 client                |      100 |      100 |      100 |      100 |                   |
  client.js            |      100 |      100 |      100 |      100 |                   |
 nodes                 |      100 |      100 |      100 |      100 |                   |
  containerData.js     |      100 |      100 |      100 |      100 |                   |
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
<!--/@-->

<!--@dependencies()-->
## <a name="dependencies">Dependencies</a>

- [fms-api-client](https://github.com/Luidog/fms-api-client): A FileMaker Data API client designed to allow easier interaction with a FileMaker application from a web environment.
- [fs-extra](https://github.com/jprichardson/node-fs-extra): fs-extra contains methods that aren't included in the vanilla Node.js fs package. Such as mkdir -p, cp -r, and rm -rf.
- [lodash](https://github.com/lodash/lodash): Lodash modular utilities.
- [marpat](https://github.com/luidog/marpat): A class-based ES6 ODM for Mongo-like databases.

<!--/@-->

<!--@devDependencies()-->
## <a name="dev-dependencies">Dev Dependencies</a>

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [coveralls](https://github.com/nickmerwin/node-coveralls): takes json-cov output into stdin and POSTs to coveralls.io
- [dotenv](https://github.com/motdotla/dotenv): Loads environment variables from .env file
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-google](https://github.com/google/eslint-config-google): ESLint shareable config for the Google style
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html): A ESLint plugin to lint and fix inline scripts contained in HTML files.
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

<!--/@-->
