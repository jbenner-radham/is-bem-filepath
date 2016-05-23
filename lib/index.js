'use strict';

const isBem = require('is-bem');
const path  = require('path');

module.exports = function (filepath) {
    let [directory, file] = filepath.split(path.sep).slice(-2);
    let fileExtension     = path.extname(file);
    let fileBasename      = path.basename(file, fileExtension);

    // If not an "element" or "modifier" compare the directory against the file
    // basename.
    if (directory.indexOf('_') !== 0) {
        return (isBem(fileBasename) && directory === fileBasename);
    }

    // Otherwise the class name either potentially contains an "element" or
    // "modifier" and is checked thusly.
    let directories = filepath.split(path.sep).slice(-3, -1);

    return (isBem(fileBasename) && directories.join('') === fileBasename);
};
