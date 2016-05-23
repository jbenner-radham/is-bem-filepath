is-bem-filepath
=====================
[![npm version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

Is valid BEM filepath?

Installation
------------
```sh
$ npm install --save is-bem-filepath
```

Usage
-----
```js
const isBemFilepath = require('is-bem-filepath');

isBemFilepath('blocks/blocky/__elementy/blocky__elementy.scss'); // True
```

Testing
-------
```sh
$ npm test
```

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.

[npm-image]: https://badge.fury.io/js/is-bem-filepath.svg
[npm-url]: https://npmjs.org/package/is-bem-filepath
[travis-image]: https://travis-ci.org/jbenner-radham/is-bem-filepath.svg?branch=master
[travis-url]: https://travis-ci.org/jbenner-radham/is-bem-filepath
[daviddm-image]: https://david-dm.org/jbenner-radham/is-bem-filepath.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jbenner-radham/is-bem-filepath
