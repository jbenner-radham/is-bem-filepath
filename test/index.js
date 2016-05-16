'use strict';

const expect             = require('chai').expect;
const isValidBemFilepath = require('../lib');

describe('is-valid-bem-filepath', function () {
    it('should pass a valid filepath', function () {
        let filepath = '/Users/jbenner/bem-lab/sass/blocks/blocky/blocky.scss';

        expect(isValidBemFilepath(filepath)).to.equal(true);
    });

    it('should fail an invalid filepath', function () {
        let filepath = '/Users/jbenner/bem-lab/sass/blocks/blocksy/blocky.scss';

        expect(isValidBemFilepath(filepath)).to.equal(false);
    })
});
