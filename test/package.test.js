/* global describe, it */

var expect = require('chai').expect;


describe('bixby-security', function() {
  
  describe('package.json', function() {
    var json = require('../package.json');
    
    it('should have assembly metadata', function() {
      expect(json.assembly.namespace).to.equal('security');
      
      expect(json.assembly.components).to.have.length(5);
      expect(json.assembly.components).to.include('authentication/token/authenticate');
    });
  });
  
  it('should throw if required', function() {
    expect(function() {
      var pkg = require('..');
    }).to.throw(Error).with.property('code', 'MODULE_NOT_FOUND');
  });
  
});
