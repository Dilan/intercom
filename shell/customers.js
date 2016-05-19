var distance = require('../utils/geo').distance;
var readJson = require('../utils/json').read;
var Customers = require('../utils/customers');

var filepath = process.argv[2] || __dirname + '/../tests/data/customers.json';

readJson(filepath).then(function(jsonList) {
    var within100kmFromIntercom = function(customer) {
        var intercom = { location: { latitude: 53.3381985, longitude: -6.2592576 }};
        return (distance(intercom.location, customer.location) < 100);
    };

    var list = new Customers(jsonList).
        find(within100kmFromIntercom).
        sort('id').
        select(['id','name']).
        list;

    console.log(list)

}).catch(function(err) {
    console.error(err)
});
