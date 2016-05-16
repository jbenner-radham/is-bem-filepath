'use strict';

const path = require('path');

module.exports = function (filepath) {
    let [directory, file] = filepath.split(path.sep).slice(-2);
    let fileExtension     = path.extname(file);
    let fileBasename      = path.basename(file, fileExtension);

    return (directory === fileBasename);
};
