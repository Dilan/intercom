var should = require('should');
var distance = require('../utils/geo').distance;

describe('Test geo() functionality', function() {

    it('distance between Dublin and Bray should be approximately ~20km', function() {
        var dublin = {
            latitude: 53.349805,
            longitude: -6.260310
        };
        var bray = {
            latitude: 53.200903,
            longitude: -6.111074
        };
        distance(dublin, bray).should.be.approximately(20, 0.9);
    });
});
