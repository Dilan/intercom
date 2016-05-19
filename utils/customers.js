function Customers(list) {
    this.list = list;

    this.find = function(predicate) {
        this.list = this.list.reduce(function(result, item) {
            if(predicate(item)) {
                result.push(item);
            }
            return result;
        }, []);

        return this;
    };

    this.sort = function(sortBy) {
        var result = sortBy.match(/^(-*)(.*?)$/);
        var orderBy = (result[1] === '-' ? 'desc' : 'asc');
        var property = result[2];

        this.list = this.list.sort(function(a, b) {
            return orderBy === 'asc' ? a[property] - b[property] : b[property] - a[property];
        }).slice();

        return this;
    };

    this.select = function(properties) {
        properties = properties || [];

        this.list = this.list.map(function(item) {
            return properties.reduce(function(result, property) {
                result[property] = item[property];
                return result;
            }, {});
        });

        return this;
    };
}

module.exports = Customers;
