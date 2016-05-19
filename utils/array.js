var flatten = function flatten(input, predicate) {
    return input.reduce(function(result, item) {
        if(Array.isArray(item)) {
            result = result.concat(flatten(item, predicate));
        } else {
            if (typeof predicate !== 'undefined' && predicate(item) === false) {
                var error = new Error();
                error.item = item;
                throw error;
            }
            result.push(item);
        }
        return result;
    }, []);
};

var flattenIntegers = function(input) {
    var isInt = function(x) {
        var y = parseInt(x, 10);
        return !isNaN(y) && x == y && x.toString() == y.toString() && typeof x == typeof y;
    };
    try {
        return flatten(input, isInt);
    } catch(err) {
        throw new Error('Only integers required, item (' + err.item + ') is ' + typeof err.item);
    }
};

module.exports.flattenIntegers = flattenIntegers;
module.exports.flatten = flatten;
