var should = require('should');
var flatten = require('../utils/array').flattenIntegers;

describe('Test flatten() functionality', function() {

    it('nested arrays with integers', function() {
        var input = [[1,2,[3]],4];
        var output = flatten(input);

        [1,2,3,4].forEach(function(item, idx) {
            item.should.equal(output[idx]);
        });
    });

    it('one integer in 4 nested arrays', function() {
        var input = [[[[1]]]];
        var output = flatten(input);

        [1].forEach(function(item, idx) {
            item.should.equal(output[idx]);
        });
    });

    it('one integer in 320 nested arrays', function() {
        var input = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[
            [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[
            [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[
            [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[1
            ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
        ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
            ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
        ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],2];
        var output = flatten(input);

        [1,2].forEach(function(item, idx) {
            item.should.equal(output[idx]);
        });
    });

    it('string items in array converted to integer', function() {
        var input = [[1,'2',[3]],4];
        var output = flatten(input);

        [1,2,3,4].forEach(function(item, idx) {
            item.should.equal(output[idx]);
        });
    });

    it('empty string in nested arrays have to return Exception', function(done) {
        var input = [[1],[' ',[3]],4];
        try {
            flatten(input);
        } catch(err) {
            err.message.should.equal('Only integers required, item ( ) is string');
            done();
        }
    });

    it('NULL in nested arrays have to return Exception', function(done) {
        var input = [[1],[null,[3]],4];
        try {
            flatten(input);
        } catch(err) {
            err.message.should.equal('Only integers required, item (null) is object');
            done();
        }
    });

    it('string in nested arrays have to return Exception', function(done) {
        var input = [[[['oops']]]];
        try {
            flatten(input);
        } catch(err) {
            err.message.should.equal('Only integers required, item (oops) is string');
            done();
        }
    });

    it('undefined in nested arrays have to return Exception', function(done) {
        var input = [[1],[undefined,[3]],4];
        try {
            flatten(input);
        } catch(err) {
            err.message.should.equal('Only integers required, item (undefined) is undefined');
            done();
        }
    });

    it('float in nested arrays have to return Exception', function(done) {
        var input = [[1],[2.2,[3]],4];
        try {
            flatten(input);
        } catch(err) {
            err.message.should.equal('Only integers required, item (2.2) is number');
            done();
        }
    });
});
