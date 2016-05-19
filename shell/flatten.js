var flatten = require('../utils/array').flattenIntegers;

var input = [[1,2,[3]],4]; // default
try {
    if(typeof process.argv[2] !== 'undefined') {
        input = JSON.parse(process.argv[2]);
    }
    var result = flatten(input);
    console.log(result);

} catch(err) {
    console.error('[ERROR] Wrong input : ' + err.message);
}