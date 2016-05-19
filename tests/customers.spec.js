var fs = require('fs');
var should = require('should');
var distance = require('../utils/geo').distance;
var readJson = require('../utils/json').read;
var Customers = require('../utils/customers');

describe('Test customers() functionality', function() {

    it('get customers IDs only', function(done) {
        var path = __dirname + '/data/customers.json';
        readJson(path).then(function(list) {

            var result = new Customers(list).select(['id']).list;

            result.length.should.equal(4);
            result[0].should.have.property('id', 206);
            result[1].should.have.property('id', 307);
            result[2].should.have.property('id', 103);
            result[3].should.have.property('id', 101);

            Object.keys(result[0]).length.should.equal(1);
            Object.keys(result[1]).length.should.equal(1);
            Object.keys(result[2]).length.should.equal(1);
            Object.keys(result[3]).length.should.equal(1);

            done();
        }).catch(function(err) {
            done(err);
        });
    });

    it('get all customers sorted by id (desc)', function(done) {
        var path = __dirname + '/data/customers.json';
        readJson(path).then(function(list) {

            var result = new Customers(list).sort('-id').list;

            result.length.should.equal(4);
            result[0].should.have.property('id', 307);
            result[1].should.have.property('id', 206);
            result[2].should.have.property('id', 103);
            result[3].should.have.property('id', 101);

            done();
        }).catch(function(err) {
            done(err);
        });
    });

    it('get all customers (within 100km), sorted by id (asc)', function(done) {
        var path = __dirname + '/data/customers.json';
        var intercom = { location: { latitude: 53.3381985, longitude: -6.2592576 }};

        readJson(path).then(function(list) {

            var within100km = function(customer) {
                return (distance(intercom.location, customer.location) < 100);
            };

            var result = new Customers(list).find(within100km).sort('id').list;

            result.length.should.equal(2);
            result[0].should.have.property('id', 101);
            result[1].should.have.property('id', 103);

            done();
        }).catch(function(err) {
            done(err);
        });
    });
});
