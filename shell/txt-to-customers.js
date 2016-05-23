var distance = require('../utils/geo').distance;
var toJsonList = require('../utils/json').toJsonList;
var Customers = require('../utils/customers');

var filepath = process.argv[2] || __dirname + '/../tests/data/customers.txt';

toJsonList(filepath).then(function(jsonList) {
    var within100kmFromIntercom = function(customer) {
        return (distance(
            { latitude: 53.3381985, longitude: -6.2592576 }, // Intercom
            { latitude: customer.latitude, longitude: customer.longitude }) < 100
        );
    };

    var list = new Customers(jsonList).
        find(within100kmFromIntercom).
        sort('user_id').
        select(['user_id','name']).
        list;

    var result = list.map(function(item) {
        return (item['user_id'] + ' - ' + item['name']);
    }).join('\n');

    console.log(result);

}).catch(function(err) {
    console.error(err)
});
