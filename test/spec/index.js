var expect = require('chai').expect;

describe('random-country: ', function () {

  var randomCountry = require('../../');

  it('common', function () {

    expect(randomCountry()).to.be.a('string');
    expect(randomCountry({ full: true })).to.be.a('string');

  });

});
