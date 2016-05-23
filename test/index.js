'use strict';

const expect        = require('chai').expect;
const isBemFilepath = require('../lib');

describe('is-bem-filepath', function () {
    it('should pass a valid filepath', function () {
        let filepath = '/Users/jbenner/bem-lab/sass/blocks/blocky/blocky.scss';

        expect(isBemFilepath(filepath)).to.equal(true);
    });

    it('should fail an invalid filepath', function () {
        let filepath = '/Users/jbenner/bem-lab/sass/blocks/blocksy/blocky.scss';

        expect(isBemFilepath(filepath)).to.equal(false);
    })
});
