# awesome-project

Generated by [OSS Project Generator](http://bit.ly/generator-oss-project).

[![Travis Status][travis-badge]][travis-url]
[![AppVeyor Status][appveyor-badge]][appveyor-url]
[![CircleCI Status][circleci-badge]][circleci-url]
[![Coveralls Status][coveralls-badge]][coveralls-url]
[![NPM Version][npm-badge]][npm-url]
[![License][license-badge]][license-url]

> An awesome project

Long description.

## Installation

Install package

```bash
$ npm install --save awesome-project
```

## Usage

Say `It works!`

```js
const lib = require('awesome-project');

lib.hello((err, message) => {
  if (err) return console.error(err);

  console.log(message);
});
```

## Development

- Cloning the repo

```bash
$ git clone https://github.com/exit/awesome-project.git
```

- Installing dependencies

```bash
$ npm install
```

- Running scripts

| Action                                   | Usage               |
| ---------------------------------------- | ------------------- |
| Starting development mode                | `npm start`         |
| Linting code                             | `npm run lint`      |
| Running unit tests                       | `npm run jest`      |
| Running lint + tests                     | `npm test`          |
| Running code coverage                    | `npm run coverage`  |
| Sending coverage results to Coveralls.io | `npm run coveralls` |

## Author

[apiteste](https://twitter.com/exit)

## License

[MIT](https://github.com/exit/awesome-project/blob/master/LICENSE)

[travis-badge]: https://travis-ci.org/exit/awesome-project.svg?branch=master
[travis-url]: https://travis-ci.org/exit/awesome-project
[appveyor-badge]: https://ci.appveyor.com/api/projects/status/github/exit/awesome-project?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/exit/awesome-project
[circleci-badge]: https://circleci.com/gh/exit/awesome-project/tree/master.svg?style=shield
[circleci-url]: https://circleci.com/gh/exit/awesome-project
[coveralls-badge]: https://coveralls.io/repos/github/exit/awesome-project/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/exit/awesome-project?branch=master
[npm-badge]: https://img.shields.io/npm/v/awesome-project.svg
[npm-url]: https://www.npmjs.com/package/awesome-project
[license-badge]: https://img.shields.io/github/license/exit/awesome-project.svg
[license-url]: https://opensource.org/licenses/MIT